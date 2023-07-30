import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import expert from "../../Images/expert.png";
import slider from "../../Images/SliderImage1.jpg";
import { useNavigate } from "react-router-dom";
import "../../Style/index.css";

const ImageSlider = () => {
  let navigate = useNavigate();
  const sliderData = [{ img: slider }, { img: slider }, { img: slider }];
  return (
    <div>
      <div className="sliderContainer">
        <OwlCarousel
          items={1}
          className="owl-theme"
          autoplay="true"
          loop="true"
          nav
          margin={8}
          smartSpeed="1000"
        >
          {sliderData?.map((slide, index) => {
            return (
              <div key={index}>
                <img src={slide.img} alt="slider" />
                <div className="expert ">
                  <img src={expert} alt="expert-icon" />
                </div>
                <div className="sliderOneDetails">
                  <h4>KNOWLEDGE IS POWER</h4>
                  <h3>
                    Unlimited <span className="sliderSpan">Free CA Final</span>{" "}
                    Mock Test
                  </h3>
                  <div className="sliderPage1AnimationButton">
                    <button
                      className="sliderpageOneBtn"
                      onClick={() => {
                        navigate("/contactus");
                      }}
                    >
                      CONTACT US
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ImageSlider;
