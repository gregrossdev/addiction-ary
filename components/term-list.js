import React from 'react';
import TermItem from './term-item';
import termlist from './term-list.module.css'


export default function TermList({ terms }){

  return (
    <div className={termlist.letters}>
      
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
