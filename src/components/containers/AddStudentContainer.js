import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {AddStudentView }from "../views";
import { addStudentThunk } from "../../thunks";

class AddStudentContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          gpa: "",
          campusId:"",
          isValidEmail: false,
          errors: {},
        };
      }

      handleChange = (e) => {
        if (e.target.name === "email") {
          this.setState({ email: e.target.value }, this.validateEmail);
        } else {
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

      handleSubmit = (e) => {
        e.preventDefault();
        {console.log(this.state)}
        if (this.state.isValidEmail) this.props.addStudent(this.state);
      };
    
    render(){
        return(<div>
            {this.state.isValidEmail ? "" : this.state.errors.email}
            <AddStudentView
            firstName= {this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            gpa={this.state.gpa}
            campusId={this.state.campusId}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            /></div>)
    }
}
const mapDispatch = (dispatch, ownProps) => {
    return {
      addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
    };
  };
  
  AddStudentContainer.propTypes = {
    addStudent: PropTypes.func.isRequired,
  };
  
  export default connect(null, mapDispatch)(AddStudentContainer);