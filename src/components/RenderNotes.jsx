import React from "react";
import { useSearchValue } from "../contexts/search";
import { useNotesList } from "../contexts/notesList";

const RenderNotes = ({ onDelete = () => {} }) => {
  const data = useNotesList();
  const search = useSearchValue();

  const renderData = () => {
    return data.filter((list) => {
      return (
        list.title.toLowerCase().includes(search.toLowerCase()) ||
        list.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  const renderTime = (time) => {
    console.log(time);

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formatedDate = new Intl.DateTimeFormat("en-US", options).format(
      new Date(time)
    );
    console.log("formatedDate", formatedDate);
    return formatedDate;
  };
  return (
    <section className="notes_list">
      <ul>
        {data
          ? renderData().map(({ id, title, time, description }) => (
              <li key={id}>
                <div className="card_details">
                  <p>{renderTime(time)}</p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <i
                  className="material-icons more_vert"
                  onClick={() => onDelete(id)}
                >
                  delete
                </i>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default RenderNotes;
