import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import consulting from "../../Images/consulting.png";
import programs from "../../Images/programs.png";
import training from "../../Images/training.png";
import "../../Style/OurApproach.css";
import OurApproachCard from "../Card/OurApproachCard";
import { Link } from "react-router-dom";

const OurApproach = () => {
  const cardData = [
    {
      number: "01",
      heading: "Taxation",
      image: consulting,
    },
    {
      number: "02",
      heading: "Company Compliance",

      image: training,
    },
    {
      number: "03",
      heading: "Investment Advisory",
      image: programs,
    },
  ];
  return (
    <div className="ourApproach-wrapper">
      <Container>
        <div className="ourapproach-topheading">OUR APPROACH</div>
        <div className="ourapproach-subheading">
          Brand is just a perception,{" "}
          <span className="ourapproach-subheading-color">
            and perception will match reality over time.
          </span>
        </div>
        <div className="ourapproach-content">
          Don't have access to professional resources?{" "}
          <Link className="approach-wrapper-link" to="/contactus">
            Contact Us
          </Link>
        </div>
        <div className="ourapporach-card-wrapper">
          <Row>
            {cardData.map((item) => {
              return (
                <Col>
                  <OurApproachCard
                    number={item.number}
                    heading={item.heading}
                    context={item.context}
                    image={item.image}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurApproach;
