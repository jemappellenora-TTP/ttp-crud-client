import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return <div className="all-students">There are no students</div>;
      }
    return(
        <div>
        <Link to="/students/new" className="add-student">
        Add a Student
        </Link>
        <div>
            {props.allStudents.map((student) => (
            <div key={student.id}>
                <Link to={`/students/${student.id}`}>
                <h1>{student.firstName} {student.lastName}</h1>
                </Link>
                <button onClick={() => props.handleDelete(student.id)}>
                    Delete
                </button>
            </div>))}
        </div>
        </div>)
        

}
export default AllStudentsView;