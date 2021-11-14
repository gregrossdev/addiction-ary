import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className=""
      type="search"
      placeholder="search terms"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
