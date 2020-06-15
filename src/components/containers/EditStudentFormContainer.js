import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchStudentThunk, editStudentThunk } from "../../thunks";
import { connect } from "react-redux";
import { EditStudentFormView } from "../views";

class EditStudentFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          gpa: "",
          campusId:"",
          isValidEmail: false,
          isValidGpa: false,
          errors: {},
        };
      }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
  }

  handleChange = (e) => {
    if (e.target.name === "email") {
        this.setState({ email: e.target.value }, this.validateEmail);
    } else if (e.target.name === "gpa"){
        this.setState({ gpa: e.target.value }, this.validateGpa);
    }else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  validateEmail = () => {
    const { email } = this.state;
    let errors = { ...this.state.errors };
    let isValidEmail=true;
    if (email.length < 8) {
      // if not, set the value to false and add error message
      isValidEmail = false;
      errors.email = "Invalid email";
    }
    //
    // setstate with isValidName
    if (isValidEmail) {
      errors.email = "valid email";
    }
    this.setState({ isValidEmail, errors });
  };

  validateGpa = () => {
    const { gpa } = this.state;
    let errors = { ...this.state.errors };
    let isValidGpa=true;
    if (gpa>4 || gpa<0) {
      // if not, set the value to false and add error message
      isValidGpa = false;
      errors.Gpa = "GPA must be between 0-4";
    }
    //
    // setstate with isValidName
    if (isValidGpa) {
      errors.Gpa = "valid GPA";
    }
    this.setState({ isValidGpa, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidEmail && this.state.isValidGpa){
        const id = this.props.match.params.id;
        this.props.editStudent(id, this.state);
        this.props.history.push(`/students/${id}`);
    }
  };

  render() {
    return (
        <>
        {this.state.isValidEmail ? "" : this.state.errors.email}
        {this.state.isValidGpa ? "" : this.state.errors.Gpa}
      <EditStudentFormView
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        gpa={this.state.gpa}
        imageUrl={this.state.imageUrl}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
      </>
    );
  }
}

const mapState = (state) => {
  return { student: state.student };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
  };
};

EditStudentFormContainer.propTypes = {
  fetchStudent: PropTypes.func.isRequired,
  editStudent: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(EditStudentFormContainer);
