import React, { useState, useEffect } from "react";
import TermList from "../components/term-list";
import SearchBox from "../components/search-box";
import nav from "../styles/layout-nav.module.css"

import { getAllTerms } from "../lib/api-util";

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
      <header className={`${nav.header} inner`}>
        <div className={nav.content}>
          <h1 className={nav.title}>Addictionary</h1>
          <p className={nav.description}>
            A book of terms, with down to earth meanings, that you might find
            pretty useful, for connecting what’s going on outside, with what’s
            happening inside.
          </p>
          <SearchBox searchChange={onSearchChange} />
        </div>
      </header>
      <section className="inner content">
        <TermList terms={filteredTerms} />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getAllTerms();

  return {
    props: {
      data,
    },
    revalidate: 1800,
  };
}
