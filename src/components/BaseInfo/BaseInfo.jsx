import { useSelector } from "react-redux";
import css from "./BaseInfo.module.css";
import { selectChoiceCampersIds } from "../../redux/choiceCampers/selectors";
import Button from "../Button/Button";
import { toggleChoiceCamper } from "../../redux/choiceCampers/slice";
import { selectCamperById } from "../../redux/allCampers/selectors";

export default function BaseInfo({
  title,
  price,
  rating,
  reviews,
  location,
  id,
}) {
  const choiceCampers = useSelector(selectChoiceCampersIds);
  const currentCamper = useSelector((state) => selectCamperById(state, id));

  return (
    <div>
      <div className={css.upInfo}>
        <h2 className={css.title}>{title}</h2>
        {!price || (
          <div className={css.priceContainer}>
            <p className={css.price}>€{price.toFixed(2)}</p>
            <Button
              styles={css.checkBtn}
              onClick={toggleChoiceCamper}
              credentials={currentCamper}
            >
              <svg
                className={`${css.icons} ${
                  !choiceCampers.includes(id) || css.choiceCamper
                }`}
              >
                <use href={"/sprite.svg#heart"}></use>
              </svg>
            </Button>
          </div>
        )}
      </div>
      <div className={css.downContainer}>
        <svg className={`${css.icons} ${css.ratingIcon}`}>
          <use href={"/sprite.svg#rating"}></use>
        </svg>
        <p className={css.rating}>{rating}</p>
        <p>{reviews ? `(${reviews} Reviews)` : "No reviews"}</p>
        <div className={css.locationContainer}>
          <svg className={`${css.icons} ${css.locationIcon}`}>
            <use href="/sprite.svg#icon-location"></use>
          </svg>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
