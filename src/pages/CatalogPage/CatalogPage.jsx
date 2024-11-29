import Location from "../../components/Location/Location";
import css from "./CatalogPage.module.css";
import equipment from "../../../equipment.json";
import typeFiltersArr from "../../../typeFilters.json";
import RenderFilters from "../../components/RenderFilters/RenderFilters";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setEquipmentFilters, setTypeFilters } from "../../redux/filters/slice";
import {
  selectEquipmentFilters,
  selectTypeFilters,
} from "../../redux/filters/selectors";

export default function CatalogPage() {
  const activeEquipmentFilters = useSelector(selectEquipmentFilters);
  const activeTypeFilters = useSelector(selectTypeFilters);

  // const dispatch = useDispatch();

  const handleClick = () => {
    // make request to back for filtered Campers
  };

  return (
    <div className="container">
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
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
}
