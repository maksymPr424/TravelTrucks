import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <div className={css.container}>
      <nav className={`${css.content} container`}>
        <NavLink to="/" className={css.title}>
          Travel<span className={css.truck}>Trucks</span>
        </NavLink>
        <div className={css.navigation}>
          <NavLink
            className={`${css.link} ${pathname !== "/" || css.activeLink}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`${css.link} ${
              pathname !== "/catalog" || css.activeLink
            }`}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
