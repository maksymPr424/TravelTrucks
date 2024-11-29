import { useNavigate } from "react-router-dom";
import css from "./Button.module.css";

export default function Button({ children, styles, onClick, navigateTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button onClick={handleClick} className={`${css.button} ${styles}`}>
      {children}
    </button>
  );
}
