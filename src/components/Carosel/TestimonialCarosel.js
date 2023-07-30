import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialCard from "../Card/TestimonialCard";

const TestimonialCarosel = () => {
  return (
    <div>
      <OwlCarousel
        items={1}
        autoplay="true"
        loop="true"
        margin={8}
        smartSpeed="1000"
        className="owl-theme testimonial-carousel"
        mergeFit={true}
        center={true}
      >
        <TestimonialCard />
      </OwlCarousel>
    </div>
  );
};

export default TestimonialCarosel;
