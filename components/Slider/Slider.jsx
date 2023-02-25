import "./slider.css";

import Slick, { Settings } from "react-slick";

export default function Slider(props) {
  return (
    <Slick {...props} pauseOnHover={true}>
      {props.children}
    </Slick>
  );
}
