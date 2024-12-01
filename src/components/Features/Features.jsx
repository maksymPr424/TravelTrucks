import { useSelector } from "react-redux";
import Characteristics from "../Characteristics/Characteristics";
import css from "./Features.module.css";
import { selectCurrentCamper } from "../../redux/allCampers/selectors";
import Details from "../Details/Details";
import OrderForm from "../OrderForm/OrderForm";

export default function Features() {
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
  } = useSelector(selectCurrentCamper);

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
