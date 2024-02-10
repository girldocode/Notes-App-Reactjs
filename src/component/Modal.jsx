import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../Redux/modalSlice";

const Modal = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Please fill out all fields");
    } else {
      onAddNote(title, content);
      setTitle("");
      setContent("");
      dispatch(closeModal());
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleChangeText = (event) => {
    setContent(event.target.value);
    setError("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
    setError("");
  };

  return (
    <>
      {isOpen && (
        <div>
          <div className="modal-backdrop"></div>
          <div className="modal-overlay ">
            <div className="modal-content">
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Add a title"
                      className="form-input"
                      value={title}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Add a note"
                      className="form-textarea"
                      id="content"
                      cols="3"
                      rows="4"
                      value={content}
                      onChange={handleChangeText}
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                  {error && <p className="error-message">{error}</p>}
                  <button type="submit" className="secondary-button">
                    Add
                  </button>
                </form>
              </div>
              <span className="close-btn" onClick={handleClose}>
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
