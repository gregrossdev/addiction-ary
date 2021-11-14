import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { terms } from "../terms";
import "./App.css";

function App() {
  // const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       setRobots(users);
  //     });
  // }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredTerms = terms.filter((term) => {
    return term.term.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <main>
      <header className="site-header">
        <div className="site-header-content">
          <h1>Addiction-ary</h1>
          <p>
            A book of terms, with down to earth meanings, that you might find
            pretty useful, for connecting what’s going on outside, with what’s
            happening inside.
          </p>
          <SearchBox searchChange={onSearchChange} />
        </div>
      </header>

      <CardList terms={filteredTerms} />
    </main>
  );
}

export default App;
