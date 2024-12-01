import css from "./Image.module.css";

export default function Image({ src, alt }) {
  return <img className={css.image} src={src} alt={alt} />;
}
