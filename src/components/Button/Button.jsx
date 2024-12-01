import { useNavigate } from "react-router-dom";
import css from "./Button.module.css";
import { useDispatch } from "react-redux";

export default function Button({
  children,
  styles,
  onClick,
  navigateTo,
  credentials,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (onClick) {
      dispatch(onClick(credentials));
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
