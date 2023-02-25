"use client";

import Slider from "../Slider/Slider";

export default function CenterSlider(props) {
  return (
    <div>
      <Slider
        centerMode={true}
        infinite={true}
        slidesToShow={1}
        responsive={[
          {
            breakpoint: 1000,
            settings: { slidesToShow: 3 },
          },
          { breakpoint: 600, settings: { slidesToShow: 1 } },
        ]}
      >
        {props.children}
      </Slider>
    </div>
  );
}
