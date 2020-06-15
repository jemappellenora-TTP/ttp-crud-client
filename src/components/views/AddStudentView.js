import React from 'react';
import PropTypes from "prop-types";
import "./styles/AllCampusesView.css";

const AddStudentView = (props) => {
    return(
        <div>
          <form className="forms" onSubmit={props.handleSubmit}>
            <img src={props.imageUrl} width="200px" alt={props.id} />
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
              <select name="campusId" onChange={props.handleChange}>
                <option value="">Please select a Campus</option>
                {props.allCampuses
                .map((campus) => {
                    console.log(campus.id);
                    return (
                    <option value={campus.id} key={campus.id}>
                        {campus.name}
                    </option>
                    );
                })}
          </select>
            </div>
            <button>Create Student</button>
          </form>
        </div>
      );
}
export default AddStudentView;
