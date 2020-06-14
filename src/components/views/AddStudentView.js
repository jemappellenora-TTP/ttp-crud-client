import React from 'react';
import PropTypes from "prop-types";

const AddStudentView = (props) => {
    return(
        <div>
          <form onSubmit={props.handleSubmit}>
            <div>
              First Name:{" "}
              <input
                value={props.firstName}
                name="firstName"
                onChange={props.handleChange}
                required
              ></input>
            </div>
            <div>
              Last Name:{" "}
              <input
                value={props.lastName}
                name="lastName"
                onChange={props.handleChange}
                required
              ></input>
            </div>
            <div>
              Email Address:{" "}
              <input
                value={props.email}
                name="email"
                type= "email"
                onChange={props.handleChange}
                required
              ></input>
            </div>
            <div>
              gpa:{" "}
              <input
                value={props.gpa}
                name="gpa"
                onChange={props.handleChange}
                required
              ></input>
            </div>
            <div>
              CampusId:{" "}
              <input
                value={props.imageUrl}
                name="campusId"
                onChange={props.handleChange}
                required
              ></input>
            </div>
            <button>Create Student</button>
          </form>
        </div>
      );
}
export default AddStudentView;
