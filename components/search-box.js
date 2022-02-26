import React from "react";
import search from './search-box.module.css'

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className={search.input}
      type="search"
      placeholder="search terms"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
