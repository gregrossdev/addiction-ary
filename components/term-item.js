import Card from './ui-card'
import termStyle from './term-item.module.css'

export default function TermItem ({ term, definitions }) {
  return (
    <Card>
      <h2>{term}</h2>
      <ul className={termStyle.ul}>
        {definitions.map(definition => {
          return (
            <li key={definition}>
              {definition}
            </li>
          )
        })}
      </ul>
    </Card>
  );
}
