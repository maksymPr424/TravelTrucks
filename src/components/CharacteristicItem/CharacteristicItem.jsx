import { firstLetterUpper } from "../../../utils";
import css from "./CharacteristicItem.module.css";

const transparentIcons = ["water", "microwave", "gas"];

export default function CharacteristicItem({ characteristics }) {
  const getId = () => {
    if (characteristics[0] === "Fully Integrated") return "FullyIntegrated";
    if (characteristics[0] === "transmission") return "Automatic";

    return characteristics[0].length > 2
      ? firstLetterUpper(characteristics[0])
      : characteristics[0];
  };

  const isTransparentIcon = transparentIcons.includes(characteristics[0]);

  const getName = () => {
    if (
      characteristics[0] === "Fully Integrated" ||
      characteristics[0] === "transmission" ||
      characteristics[0] === "engine"
    ) {
      return firstLetterUpper(characteristics[1]);
    }

    return firstLetterUpper(characteristics[0]);
  };
  console.log(getName());

  return (
    <div className={css.container}>
      <svg
        className={`${css.icon} ${!isTransparentIcon || css.iconTransparent}`}
      >
        <use href={`/sprite.svg#${getId()}`}></use>
      </svg>
      <p className={css.name}>{getName()}</p>
    </div>
  );
}
