import css from "./CharacteristicItem.module.css";

export default function CharacteristicItem({ characteristics }) {
  const firstLetterUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const getId = () => {
    if (characteristics[0] === "Fully Integrated") return "FullyIntegrated";
    if (characteristics[0] === "transmission") return "Automatic";

    return characteristics[0].length > 2
      ? firstLetterUpper(characteristics[0])
      : characteristics[0];
  };

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

  return (
    <div className={css.container}>
      <svg className={css.icon}>
        <use href={`/sprite.svg#${getId()}`}></use>
      </svg>
      <p className={css.name}>{getName()}</p>
    </div>
  );
}
