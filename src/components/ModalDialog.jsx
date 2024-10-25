import React from "react";
import "./modal.css";

function ModalDialog({
  children,
  open,
  title,
  onClose = () => {},
  handleAddNote = () => {},
}) {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <i className="material-icons close-icon" onClick={onClose}>
            close
          </i>
        </div>

        <div className="modal-form">{children}</div>
        <button onClick={handleAddNote}>Add</button>
      </div>
    </div>
  );
}

export default ModalDialog;
