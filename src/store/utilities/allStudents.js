import axios from "axios";

// const BASE_URL =
//   "https://cors-anywhere.herokuapp.com/" + "http://localhost:3001";

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT"
const DELETE_STUDENT = "DELETE_STUDENT"
const EDIT_STUDENT = "EDIT_STUDENT"
// ACTION CREATORS;
const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students,
  };
};

const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};
const deleteStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    payload: id,
  };
};

const editStudent = (id) => {
  return {
    type: EDIT_STUDENT,
    payload: id,
  };
};



// THUNK CREATORS;
export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get("/api/Students")
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.log(err));
};

// post to add a student
export const addStudentThunk = (student, ownProps) => (dispatch) => {
  return axios
    .post("/api/Students", student)
    .then((res) => res.data)
    .then((Students) => {
      const updateStudent = { ...Students, student: [] };
      dispatch(addStudent(updateStudent));
      ownProps.history.push(`/students/${updateStudent.id}`);
    })
    .catch((err) => console.log(err));
}

//delete a student
export const deleteStudentThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/students/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteStudent(id)))
    .catch((err) => console.log(err));
};

export const editStudentThunk = (id, student) => (dispatch) => {
  return axios
    .put(`/api/students/${id}`, student)
    .then((res) => res.data)
    .then((updatedStudent) => {
      dispatch(editStudent(updatedStudent));
    })
    .catch((err) => console.log(err));
};


// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case EDIT_STUDENT:
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
