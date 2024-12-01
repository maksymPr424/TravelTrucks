import css from "./ReviewItem.module.css";

export default function ReviewItem({ reviewInfo }) {
  const average = reviewInfo.reviewInfo;
  return (
    <div className={css.container}>
      <div className={css.upInfo}>
        <p className={css.photo}>{reviewInfo.reviewer_name[0].toUpperCase()}</p>
        <div>
          <p className={css.name}>{reviewInfo.reviewer_name}</p>

          <div className={css.ratingContainer}>
            <svg className={`${css.ratingIcon} ${average >= 1 || css.active}`}>
              <use href={"/sprite.svg#rating"}></use>
            </svg>
            <svg className={`${css.ratingIcon} ${average >= 2 || css.active}`}>
              <use href={"/sprite.svg#rating"}></use>
            </svg>
            <svg className={`${css.ratingIcon} ${average >= 3 || css.active}`}>
              <use href={"/sprite.svg#rating"}></use>
            </svg>
            <svg className={`${css.ratingIcon} ${average >= 4 || css.active}`}>
              <use href={"/sprite.svg#rating"}></use>
            </svg>
            <svg className={`${css.ratingIcon} ${average >= 5 || css.active}`}>
              <use href={"/sprite.svg#rating"}></use>
            </svg>
          </div>
        </div>
      </div>
      <p className={css.text}>{reviewInfo.comment}</p>
    </div>
  );
}
