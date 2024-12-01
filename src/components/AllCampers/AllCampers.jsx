import BaseInfo from "../BaseInfo/BaseInfo";
import css from "./AllCampers.module.css";
import Characteristics from "../Characteristics/Characteristics";
import Image from "../Image/Image";
import Button from "../Button/Button";

export default function AllCampers({ maxThree, camper }) {
  const {
    id,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    transmission,
    engine,
    AC,
    kitchen,
    gallery,
  } = camper;

  const shortestString = (str) => {
    if (str.length > 64) return str.slice(0, 64) + "...";
  };

  return (
    <div key={id} className={css.item}>
      <Image src={gallery[0].thumb} alt={name} />
      <div className={css.info}>
        <BaseInfo
          title={name}
          price={price}
          rating={rating}
          reviews={reviews.length}
          location={location}
          id={id}
        />
        <p className={css.description}>{shortestString(description)}</p>
        <Characteristics
          characteristics={{ transmission, engine, kitchen, AC }}
          maxThree={maxThree}
        />
        <Button navigateTo={`/catalog/${id}`}>Show more</Button>
      </div>
    </div>
  );
}
