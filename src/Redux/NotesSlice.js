import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  editedNote: null,
  searchNotes: "",
  getFiltered: [],
};

const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: generateId(),
        ...action.payload,
      };
      state.notes.push(newNote);
      state.getFiltered.push(newNote);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.getFiltered = state.getFiltered.filter(
        (note) => note.id !== action.payload
      );
    },
    editNote: (state, action) => {
      const { id, title, content } = action.payload;
      const index = state.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        state.notes[index] = { ...state.notes[index], title, content };
        state.getFiltered = [...state.notes];
      }
      state.editedNote = null;
    },
    searchNote: (state, action) => {
      state.searchNotes = action.payload;
      if (state.searchNotes !== "") {
        state.getFiltered = state.notes.filter(
          (note) =>
            note.title
              .toLowerCase()
              .indexOf(state.searchNotes.toLowerCase()) !== -1
        );
      } else {
        state.getFiltered = state.notes;
      }
    },
  },
});

export const { addNote, deleteNote, editNote, searchNote } = notesSlice.actions;

export default notesSlice.reducer;
