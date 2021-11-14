import React from 'react';

const Card = ({ term, definitions }) => {
  return (
    <article className="term">
      <h2>{term}</h2>
      <ul>
        {definitions.map(definition => {
          return (
            <li>
              {definition}
            </li>
          )
        })}
      </ul>
    </article>
  );
}

export default Card;
