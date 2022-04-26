import React from 'react';
import TermItem from './term-item';


export default function TermList({ terms }){

  return (
    <div>
      
      {
        terms.map(term => {
          return (
            <TermItem
              key={term.term}
              term={term.term}
              definitions={term.definitions}
              />
          );
        })
      }

    </div>
  );
}
