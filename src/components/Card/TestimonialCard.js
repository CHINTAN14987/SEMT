import React from "react";
import "../../Style/TestimonialCard.css";
const content = [
  {
    aspirantName: "Gitika Kharbanda",
    review: "This SEMT helped me  finally clearing the CA Final exams.Thankyou",
    designation: "CA Final",
    image:
      "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/18/Incoming/Pictures/1327679_Wallpaper2.jpg",
  },
  {
    aspirantName: "Chintan Chawla",
    review: `I was very depressed when on my 5th attempt again i was unable to clear the exam, my relative who is a CA recommended me SEMT and it really helped me alot. Finally on my 6th attempt with the help of SEMT I become CA.`,
    designation: "CA Final",
    image:
      "https://img.freepik.com/free-photo/handsome-indian-man-with-laptop-while-sitting-near-fountain-city-center_231208-2783.jpg?w=2000",
  },
  {
    aspirantName: "Sathak K",
    review:
      "S.E.M.T you are truly serving CA community by providing Free Mock Questions, this will help the future Chartered Accountants alot",
    designation: "CA Final",
    image:
      "https://media.licdn.com/dms/image/C5103AQG-u6hQ8-E_jA/profile-displayphoto-shrink_800_800/0/1577991381452?e=1695859200&v=beta&t=zfFCTz3KOb1Ov7J0_i-UeakZPWcey3hwGkTWUeJJb6k",
  },
  {
    aspirantName: "Gavya Chawla",
    review:
      "Thank-You. please start providing mock test for CA Inter and CA Foundation also",
    designation: "CA Final",
    image:
      "https://st2.depositphotos.com/4218696/48341/i/450/depositphotos_483413526-stock-photo-thoughtful-indian-teen-girl-studying.jpg",
  },
];

const TestimonialCard = () => {
  return (
    <>
      {content?.map((reviewData) => {
        return (
          <div className="tcard-wrapper">
            <div className="tcard-imagediv">
              <img src={reviewData.image} alt="img" />
            </div>
            <div className="tcard-body">
              <div>{reviewData.review}</div>
              <div className="tcard-designation">
                <span className="tcard-designation-colortext">
                  {reviewData.aspirantName}
                </span>{" "}
                - {reviewData.designation}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TestimonialCard;
