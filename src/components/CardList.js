import React from 'react';
import Card from './Card';


const CardList = ({ terms }) => {

  return (
    <div className="letters">
      
      {
        terms.map(term => {
          return (
            <Card
              key={term}
              term={term.term}
              definitions={term.definitions}
              />
          );
        })
      }

    </div>
  );
}

export default CardList;