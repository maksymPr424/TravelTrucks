import { firstLetterUpper } from "../../../utils";
import css from "./Details.module.css";

export default function Details({ characteristics }) {
  return (
    <div>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        {characteristics.map((item, index) => {
          const key = Object.keys(item)[0];
          return (
            <li key={index} className={css.item}>
              <p className={css.text}>{firstLetterUpper(key)}</p>
              <p className={css.text}>{firstLetterUpper(item[key])}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
