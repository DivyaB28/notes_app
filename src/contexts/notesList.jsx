import { createContext, useContext } from "react";

const NotesList = createContext(null);

const useNotesList = () => useContext(NotesList);

export { NotesList, useNotesList };
