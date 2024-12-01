import Image from "../Image/Image";
import css from "./Gallery.module.css";

export default function Gallery({ gallery }) {
  return (
    <ul className={css.gallery}>
      {gallery.map(({ thumb }, index) => (
        <li key={index} className={css.item}>
          <Image src={thumb} alt="Camper photo" />
        </li>
      ))}
    </ul>
  );
}
