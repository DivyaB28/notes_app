import React, { useState } from "react";
import "./AddNote.css";
import ModalDialog from "./ModalDialog";
import { v4 as uuidv4 } from "uuid";

const AddNote = ({ onChange = () => {} }) => {
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState(new Date().toString());
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const noteId = uuidv4();

  const handleAddNote = () => {
    let newNote = {
      id: noteId,
      title,
      time: now,
      description: desc,
    };

    onChange(newNote);
    setOpen(!open);
  };
  return (
    <div className="addNote">
      <div className="add_container" onClick={() => setOpen(true)}>
        <i className="material-icons add_icon">add</i>
      </div>
      <ModalDialog
        title={"New Note"}
        open={open}
        onClose={() => setOpen(false)}
        handleAddNote={handleAddNote}
      >
        <form>
          <label for="title">
            Title
            <input
              placeholder="Title of the Note..."
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
            />
          </label>
          <label for="time">
            Choose when
            <input
              type="datetime-local"
              value={now}
              step={1000}
              onChange={(e) => {
                const selectedDate = e.target.value;

                return setNow(selectedDate);
              }}
              name="time"
            />
          </label>
          <label for="desc">
            More Info
            <textarea
              placeholder="More Info..."
              value={desc || ""}
              onChange={(e) => setDesc(e.target.value)}
              name="desc"
            />
          </label>
        </form>
      </ModalDialog>
    </div>
  );
};

export default AddNote;
