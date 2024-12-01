import CharacteristicItem from "../CharacteristicItem/CharacteristicItem";
import css from "./Characteristics.module.css";

export default function Characteristics({ characteristics, maxThree }) {
  return (
    <ul className={`${css.characteristics} ${!maxThree || css.maxThree}`}>
      {Object.entries(characteristics).map((item, index) => (
        <li key={index} className={css.item}>
          <CharacteristicItem characteristics={item} />
        </li>
      ))}
    </ul>
  );
}
