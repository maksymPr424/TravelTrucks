import OrderForm from "../OrderForm/OrderForm";
import css from "./Reviews.module.css";
import { useSelector } from "react-redux";
import { selectCurrentCamper } from "../../redux/allCampers/selectors";
import ReviewItem from "../ReviewItem/ReviewItem";

export default function Reviews() {
  const { reviews } = useSelector(selectCurrentCamper);

  return (
    <div className={css.container}>
      <ul className={css.reviewsContainer}>
        {reviews.map((item, index) => (
          <li key={index}>
            <ReviewItem reviewInfo={item} />
          </li>
        ))}
      </ul>
      <OrderForm />
    </div>
  );
}
