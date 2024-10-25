import "./App.css";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import RenderNotes from "./components/RenderNotes";
import Search from "./components/Search";
import { NotesList } from "./contexts/notesList";
import { SearchContext } from "./contexts/search";
import { useEffect, useState } from "react";

const notes_list = [
  {
    id: 1,
    title: "Meeting",
    time: "9:00 am",
    description: "Exceptur sint occaecat cupidatat non proiden.",
    isDone: false,
    category: "office",
  },
  {
    id: 2,
    title: "Salon",
    time: "9:00 am",
    description: "Exceptur sint occaecat cupidatat non proiden.",
    isDone: false,
    category: "office",
  },
  {
    id: 3,
    title: "School Pickup",
    time: "9:00 am",
    description: "Exceptur sint occaecat cupidatat non proiden.",
    isDone: false,
    category: "office",
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [notesList, setNotesList] = useState(
    JSON.parse(localStorage.getItem("notes_list"))
  );

  const updateLocalStorage = (updatedList) => {
    localStorage.setItem("notes_list", JSON.stringify(updatedList));
  };
  useEffect(() => updateLocalStorage(notesList || notes_list));

  const handleAddNote = (newNote) => {
    const updatedList = [...notesList, newNote];
    setNotesList(updatedList);
    updateLocalStorage(updatedList);
  };

  const handleOnDelete = (deleteId) => {
    const updatedList = notesList.filter((item) => item.id !== deleteId);
    setNotesList(updatedList);
  };
  return (
    <NotesList.Provider value={notesList}>
      <SearchContext.Provider value={searchValue}>
        <main>
          <Header />
          <Search onChange={setSearchValue} />
          <RenderNotes onDelete={handleOnDelete} />
          <AddNote onChange={handleAddNote} />
        </main>
      </SearchContext.Provider>
    </NotesList.Provider>
  );
}

export default App;
