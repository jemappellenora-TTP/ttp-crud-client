import axios from "axios";

// Action Types
const FETCH_STUDENT = "FETCH_STUDENT";
const ENROLL_STUDENT = "ENROLL_STUDENT";

// Action Creators

const fetchStudent = (student) => {
  return {
    type: FETCH_STUDENT,
    payload: student,
  };
};

const enrollStudent = (student) => {
    return {
      type: ENROLL_STUDENT,
      payload: student,
    };
  };

// Thunk Creators
export const fetchStudentThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/students/${id}`)
    .then((res) => res.data)
    .then((student) => dispatch(fetchStudent(student)))
    .catch((err) => console.log(err));
};

export const enrollStudentThunk = (campusId, studentId) => (dispatch) => {
    return axios
      .put(`/api/students/${studentId}`, { campusId: campusId })
      .then((res) => res.data)
      .then((student) => dispatch(enrollStudent(student)))
      .catch((err) => console.log(err));
  };

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
        return action.payload;
    case ENROLL_STUDENT:
        return state.map((student) =>
            student.id === action.payload.id ? action.payload : student
        );
    default:
      return state;
  }
};

export default reducer;
