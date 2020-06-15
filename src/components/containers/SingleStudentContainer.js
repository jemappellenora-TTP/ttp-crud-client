import React, {Component} from 'react';
import { connect } from "react-redux";
import {SingleStudentView} from "../views";
import { fetchStudentThunk, deleteStudentThunk} from "../../thunks"

class SingleStudentContainer extends Component{
    componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id);
      }
    
      handleDelete = (id) => {
        this.props.deleteStudent(id);
        this.props.history.push("/students");
      };
    
    render(){
        return(<>
            <SingleStudentView
                student = {this.props.student}
                handleDelete = {this.handleDelete}/>
        </>)
    }
}
const mapState = (state) => {
    return {
      student: state.student,
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
      deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    };
  };
  
  export default connect(mapState, mapDispatch)(SingleStudentContainer);