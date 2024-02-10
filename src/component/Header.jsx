import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNote } from "../Redux/NotesSlice";
import logoImg from "../assets/icons8-kuromi-100.png";
import store from "../Redux/store";
import Modal from "../component/Modal";
import { openModal } from "../Redux/modalSlice";

const Header = () => {
  const searchValue = useSelector((state) => state.notes.searchNotes);
  const dispatch = useDispatch();
  const handleSearchValue = (e) => {
    dispatch(searchNote(e.target.value.toLowerCase()));
  };

  return (
    <>
      <header className="header container">
        <div className="brand">
          <img className="logo" src={logoImg} alt="logo" />
          <h3>Kuromi Notes</h3>
        </div>
        <div className="form-search">
          <form className="search">
            <input
              className="custom-input"
              type="text"
              name="title"
              placeholder="Search Note.."
              value={searchValue}
              onChange={(e) => handleSearchValue(e)}
            />
          </form>
        </div>

        <div className="add-note">
          <button
            className="primary-button"
            onClick={() => store.dispatch(openModal())}
          >
            New Note
          </button>
          <Modal />
        </div>
      </header>
      <div style={{ borderTop: "1px solid #0E0834", marginTop: "8px" }}></div>
    </>
  );
};

export default Header;
