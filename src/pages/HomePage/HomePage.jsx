import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={` ${css.content} container`}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        {/* <NavLink to="/catalog" className={css.linkButton}> */}
        <Button navigateTo={"/catalog"}>View now</Button>
        {/* </NavLink> */}
      </div>
    </div>
  );
}
