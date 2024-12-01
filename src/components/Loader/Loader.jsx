import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="var(--text)"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
