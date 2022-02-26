import card from './ui-card.module.css'

export default function Card ({children}) {
  return (
    <article className={card.card}>
      {children}
    </article>
  );
}

