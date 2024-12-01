import cities from "../../../cities.json";
import css from "./Location.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/filters/selectors";
import { setLocation } from "../../redux/filters/slice";

export default function Location() {
  const locationFromState = useSelector(selectLocation);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const targetLocation = e.target.value;
    dispatch(setLocation(targetLocation));
  };

  return (
    <div>
      <p className={css.title}>Location</p>
      <div className={css.content}>
        <svg
          className={`${css.locationIcon} ${locationFromState || css.disabled}`}
        >
          <use href="/sprite.svg#icon-location"></use>
        </svg>
        <select
          className={`${css.select} ${locationFromState || css.disabled}`}
          name="location"
          id="location"
          value={locationFromState}
          onChange={handleChange}
        >
          {cities.map((item, index) => (
            <option className={css.option} value={item} key={index}>
              {item ? `Ukraine, ${item}` : "City"}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
