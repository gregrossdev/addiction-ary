import React, { useState, useEffect } from "react";
import TermList from "../components/term-list";
import SearchBox from "../components/search-box";

import { getAllTerms } from "../lib/api-util";

export async function getStaticProps() {
  const data = await getAllTerms();

  return {
    props: {
      data,
    },
    revalidate: 1800,
  };
}

export default function Home({ data }) {
  const [terms, setTerms] = useState(data);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredTerms = terms.filter((term) => {
    return term.term.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Addictionary</h1>
        <p className="description">
          A book of terms, with down to earth meanings, that you might find
          pretty useful, for connecting what’s going on outside, with what’s
          happening inside.
        </p>
        <SearchBox searchChange={onSearchChange} />
      </header>
      <section className="content">
        <TermList terms={filteredTerms} />
      </section>
    </div>
  );
}


