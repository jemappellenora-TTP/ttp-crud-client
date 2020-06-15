import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {AddStudentView }from "../views";
import { fetchAllCampusesThunk, addStudentThunk } from "../../thunks";

class AddStudentContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          gpa: "",
          campusId:"",
          imageUrl: "",
          isValidEmail: false,
          isValidGpa: false,
          errors: {},
        };
      }
      componentDidMount() {
        this.props.fetchAllCampuses();
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
        if (this.state.isValidEmail && this.state.isValidGpa) this.props.addStudent(this.state);
      };
    
    render(){
        return(<div>
            {this.state.isValidEmail ? "" : this.state.errors.email}
            {this.state.isValidGpa ? "" : this.state.errors.Gpa}
            <AddStudentView
            firstName= {this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            imageUrl={this.state.imageUrl}
            gpa={this.state.gpa}
            allCampuses = {this.props.allCampuses}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            /></div>)
    }
}
const mapState = (state) =>{
    return {
        allStudents: state.allStudents,
        allCampuses: state.allCampuses,
      };
}
const mapDispatch = (dispatch, ownProps) => {
    return {
      addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
      fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    };
  };
  
  AddStudentContainer.propTypes = {
    addStudent: PropTypes.func.isRequired,
  };
  
  export default connect(mapState, mapDispatch)(AddStudentContainer);