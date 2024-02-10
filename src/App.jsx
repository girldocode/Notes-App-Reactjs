import "./App.css";

import React from "react";
import { useDispatch } from "react-redux";
import { addNote, deleteNote } from "../src/Redux/NotesSlice";
import NoteList from "../src/component/NoteList";
import Modal from "../src/component/Modal";
import Header from "../src/component/Header";

const App = () => {
  const dispatch = useDispatch();
  const handleAddNote = (title, content) => {
    dispatch(
      addNote({
        title,
        content,
      })
    );
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index));
  };
  return (
    <>
      <Header />
      <NoteList onDeleteNote={handleDeleteNote} />
      <Modal onAddNote={handleAddNote} />
    </>
  );
};

export default App;
