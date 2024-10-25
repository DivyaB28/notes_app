import React, { useContext, useState } from "react";
import { useSearchValue } from "../contexts/search";

const Search = ({ onChange }) => {
  const searchValue = useSearchValue();
  const handleInputSearch = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="search_container">
      <i className="material-icons searchIcon">search</i>{" "}
      <input
        className="searchInput"
        placeholder="Search Notes"
        onChange={handleInputSearch}
        value={searchValue}
      />
    </div>
  );
};

export default Search;
