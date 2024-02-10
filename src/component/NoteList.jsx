import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, editNote } from "../Redux/NotesSlice";

function NoteList() {
  const filteredNotes = useSelector((state) => state.notes.getFiltered);

  const dispatch = useDispatch();
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleEdit = (index, title, content) => {
    setEditedIndex(index);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const handleSaveEdit = () => {
    dispatch(
      editNote({
        id: editedIndex,
        title: editedTitle,
        content: editedContent,
      })
    );
    setEditedIndex(null);
    setEditedTitle("");
    setEditedContent("");
  };
  const handleCancelEdit = () => {
    setEditedIndex(null);
    setEditedTitle("");
    setEditedContent("");
  };
  return (
    <ul className="form-Container ">
      {filteredNotes.map((note) => (
        <li key={note.id} className="form-Container">
          {editedIndex === note.id ? (
            <div className="Form-container">
              <form action="#" method="post">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="Input-title"
                  placeholder="Enter Title"
                  required
                />
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="Textarea-content"
                  placeholder="Enter Text"
                  style={{
                    resize: "none",
                    width: "100%",
                    height: "100px",
                    overflow: "auto",
                    resize: "none",
                  }}
                  required
                />
                <div className="content-btn">
                  <button className="save-btn" onClick={handleSaveEdit}>
                    save
                  </button>
                  <button className="cancel-btn" onClick={handleCancelEdit}>
                    cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="notesContainer">
              <div className="Note-Box">
                <div className="btn-container">
                  <div className="content" style={{ alignItems: "flex-start" }}>
                    <h1
                      className="content-title"
                      // style={{
                      //   color: "white",
                      //   textAlign: "left",
                      //   maxWidth: "100%",
                      //   wordWrap: "break-word",
                      // }}
                    >
                      {note.title}
                    </h1>
                    <h4
                      className="content-text"
                      // style={{
                      //   color: "white",
                      //   textAlign: "left",
                      //   maxWidth: "100%",
                      //   wordWrap: "break-word",
                      // }}
                    >
                      {note.content}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="btn btn-delete"
                  >
                    <i className="fa fa-trash-o"></i>
                  </button>
                  <button
                    onClick={() =>
                      handleEdit(note.id, note.title, note.content)
                    }
                    className="btn btn-edit"
                  >
                    <i className="fa fa-pencil"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
