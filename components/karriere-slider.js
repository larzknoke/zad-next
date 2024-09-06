import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function KarriereSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div className="flex justify-center text-center mb-6">
        <Image
          className="rounded-full"
          src={"/images/unternehmen/team/" + "niesen_irina" + ".jpg"}
          alt="Niesen"
          width={250}
          height={250}
        />
        <h4 className="mt-4">Max Mustermann</h4>
        <p className="italic">
          "Das ist ein Musterzitat mit ein bisschen Text."
        </p>
      </div>
      <div className="flex justify-center text-center mb-6">
        <Image
          className="rounded-full"
          src={"/images/unternehmen/team/" + "knauer" + ".jpg"}
          alt="Niesen"
          width={250}
          height={250}
        />
        <h4 className="mt-4">Birgit Muster</h4>
        <p className="italic">
          "Das ist ein Musterzitat mit ein bisschen Text."
        </p>
      </div>
    </Slider>
  );
}
