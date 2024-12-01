import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentCamper,
  selectIsError,
  selectIsLoading,
} from "../../redux/allCampers/selectors";
import BaseInfo from "../../components/BaseInfo/BaseInfo";
import css from "./CamperPage.module.css";
import Gallery from "../../components/Gallery/Gallery";
import { getCamperById } from "../../redux/allCampers/operations";
import NotFound from "../../components/NotFound/NotFound";

export default function CamperPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  const camper = useSelector(selectCurrentCamper);

  const { name, price, rating, reviews, location, gallery, description } =
    camper;

  const getIsACtiveRoute = (name) => pathname.includes(name);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isError ? (
            <NotFound>Not found camper</NotFound>
          ) : (
            <div className={`container ${css.container}`}>
              <div className={css.upInfo}>
                <BaseInfo
                  title={name}
                  rating={rating}
                  reviews={reviews.length}
                  location={location}
                />
                <p className={css.price}>€{price}</p>
              </div>
              <Gallery gallery={gallery} />
              <p className={css.description}>{description}</p>

              <div className={css.moreInfoLinks}>
                <NavLink
                  to="features"
                  className={`${css.link} ${
                    !getIsACtiveRoute("features") || css.activeRoute
                  }`}
                >
                  Features
                </NavLink>
                <NavLink
                  to="reviews"
                  className={`${css.link} ${
                    !getIsACtiveRoute("reviews") || css.activeRoute
                  }`}
                >
                  Reviews
                </NavLink>
              </div>

              <div className={css.outlet}>
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
