import React from 'react';
import {Link} from 'react-router-dom'

const SingleStudentView = (props) => {
return(
    <>
        <img src={props.student.imageUrl} width="200px" alt={props.student.id} />
        <h1>Student Info</h1>
        <h3>Student Name: {props.student.firstName} {props.student.lastName}</h3>
        <li>Email: {props.student.email}</li>
        <li>GPA: {props.student.gpa}</li>
        <li>Campus: {props.student.campus?props.student.campus.name:""}</li>
        <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
    </>)
}
export default SingleStudentView;