import { useDispatch } from "react-redux";
import css from "./RenderFilters.module.css";

export default function RenderFilters({
  filters,
  vehicle,
  setFilter,
  activeFilters,
}) {
  const dispatch = useDispatch();

  const handleCheckbox = (item) => {
    const updatedFilters = activeFilters.includes(item)
      ? activeFilters.filter((filter) => filter !== item)
      : [...activeFilters, item];

    dispatch(setFilter(updatedFilters));
  };

  return (
    <div className={css.container}>
      <h3 className={css.filterName}>Vehicle {vehicle}</h3>
      <ul className={css.listFilters}>
        {filters.map((item) => (
          <li key={item}>
            <input
              type="checkbox"
              id={item}
              name={item}
              className={`${css.checkbox} visually-hidden`}
              checked={activeFilters.includes(item)}
              onChange={() => handleCheckbox(item)}
            />
            <label htmlFor={item} className={css.label}>
              <svg className={css.icons}>
                <use
                  href={`/sprite.svg#${
                    item === "Fully Integrated" ? "Fully-Integrated" : item
                  }`}
                ></use>
              </svg>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
