import React from "react";
import SearchBox from "./search-box";

export default function Nav() {
  return (
    <header className="site-header">
      <div className="site-header-content">
        <h1>Addictionary</h1>
        <p>
          A book of terms, with down to earth meanings, that you might find
          pretty useful, for connecting what’s going on outside, with what’s
          happening inside.
        </p>
        <SearchBox searchChange={onSearchChange} />
      </div>
    </header>
  );
}
