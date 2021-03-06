import React from "react";
import PropTypes from "prop-types";
import "./styles/AllCampusesView.css";

const EditStudentFormView = (props) => {
  return (
    <div>
      <form className="forms" onSubmit={props.handleSubmit}>
        <div>
          Name:{" "}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          lastName:{" "}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          email:{" "}
          <input
            value={props.email}
            type="email"
            name="email"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          GPA:{" "}
          <input
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <button>Edit Student</button>
      </form>
    </div>
  );
};

EditStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EditStudentFormView;
