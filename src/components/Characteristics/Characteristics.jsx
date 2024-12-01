import { useParams } from "react-router";
import CharacteristicItem from "../CharacteristicItem/CharacteristicItem";
import css from "./Characteristics.module.css";

export default function Characteristics({ characteristics, maxThree }) {
  const { id } = useParams();

  return (
    <ul className={`${css.characteristics} ${!maxThree || css.maxThree}`}>
      {Object.entries(characteristics).map((item, index) => (
        <div key={index}>
          {!item[1] || (
            <li key={index} className={`${css.item} ${!id || css.features}`}>
              <CharacteristicItem characteristics={item} />
            </li>
          )}
        </div>
      ))}
    </ul>
  );
}
