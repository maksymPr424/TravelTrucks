import { useParams } from "react-router";
import OrderForm from "../OrderForm/OrderForm";
import css from "./Reviews.module.css";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/allCampers/selectors";
import ReviewItem from "../ReviewItem/ReviewItem";

export default function Reviews() {
  const { id } = useParams();

  const { reviews } = useSelector((state) => selectCamperById(state, id));

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
