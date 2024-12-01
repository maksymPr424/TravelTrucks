import Location from "../../components/Location/Location";
import css from "./CatalogPage.module.css";
import equipment from "../../../equipment.json";
import typeFiltersArr from "../../../typeFilters.json";
import RenderFilters from "../../components/RenderFilters/RenderFilters";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setEquipmentFilters, setTypeFilters } from "../../redux/filters/slice";
import {
  selectAllFilters,
  selectEquipmentFilters,
  selectTypeFilters,
} from "../../redux/filters/selectors";
import { getCampers } from "../../redux/allCampers/operations";
import AllCampers from "../../components/AllCampers/AllCampers";
import {
  selectCampers,
  selectCurrentPage,
  selectIsError,
  selectIsLoading,
  selectTotalCampers,
} from "../../redux/allCampers/selectors";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";

export default function CatalogPage() {
  const activeEquipmentFilters = useSelector(selectEquipmentFilters);
  const activeTypeFilters = useSelector(selectTypeFilters);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const campersTotal = useSelector(selectTotalCampers);
  const allFilters = useSelector(selectAllFilters);

  if (campersTotal === 0 && allFilters.length === 0) {
    dispatch(getCampers(1));
  }

  const campers = useSelector(selectCampers);

  return (
    <div className={`container ${css.container}`}>
      <div className={css.leftContainer}>
        <Location />
        <p className={css.filters}>Filters</p>
        <div className={css.filtersContainer}>
          <RenderFilters
            filters={equipment}
            vehicle={"equipment"}
            setFilter={setEquipmentFilters}
            activeFilters={activeEquipmentFilters}
          />
          <RenderFilters
            filters={typeFiltersArr}
            vehicle={"type"}
            setFilter={setTypeFilters}
            activeFilters={activeTypeFilters}
          />
        </div>
        <Button onClick={getCampers} credentials={1}>
          Search
        </Button>
      </div>

      {
        <div className={css.campers}>
          {isError ? (
            <NotFound>Nothing found for these filters</NotFound>
          ) : isLoading && currentPage === 1 ? (
            <div className={css.loaderContainer}>
              <Loader />
            </div>
          ) : (
            <ul className={css.rightContainer}>
              {campers.map(
                ({
                  id,
                  name,
                  price,
                  rating,
                  reviews,
                  location,
                  description,
                  transmission,
                  engine,
                  AC,
                  kitchen,
                  gallery,
                  // ...characteristics
                }) => (
                  <li key={id} className={css.item}>
                    <AllCampers
                      camper={{
                        id,
                        name,
                        price,
                        rating,
                        reviews,
                        location,
                        description,
                        transmission,
                        engine,
                        AC,
                        kitchen,
                        gallery,
                      }}
                      maxThree={true}
                    />
                  </li>
                )
              )}
              {isLoading && currentPage > 1 ? (
                <div className={css.loaderContainer}>
                  <Loader />
                </div>
              ) : (
                campersTotal <= currentPage * 5 || (
                  <li>
                    <Button onClick={getCampers} credentials={currentPage} styles={css.button}>
                      Load More
                    </Button>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      }
    </div>
  );
}
