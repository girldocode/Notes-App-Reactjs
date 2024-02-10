import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "../Redux/NotesSlice";
import modalReducer from "../Redux/modalSlice";

const rootReducer = combineReducers({
  notes: notesReducer,
  modal: modalReducer,
});

export default rootReducer;
