import { useSelector } from "react-redux";
import Characteristics from "../Characteristics/Characteristics";
import css from "./Features.module.css";
import { selectCamperById } from "../../redux/allCampers/selectors";
import { useParams } from "react-router";
import Details from "../Details/Details";
import OrderForm from "../OrderForm/OrderForm";

export default function Features() {
  const { id } = useParams();

  const {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    form,
    width,
    height,
    tank,
    consumption,
  } = useSelector((state) => selectCamperById(state, id));

  const detailArray = [
    { form },
    { width },
    { height },
    { tank },
    { consumption },
  ];

  return (
    <div className={css.container}>
      <div className={css.infoContainer}>
        <Characteristics
          characteristics={{
            transmission,
            engine,
            AC,
            bathroom,
            kitchen,
            TV,
            radio,
            refrigerator,
            microwave,
            gas,
            water,
          }}
          maxThree={false}
        />
        <Details characteristics={detailArray} />
      </div>
      <OrderForm />
    </div>
  );
}
