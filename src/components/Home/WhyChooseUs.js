import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WhyChooseUsCard from "../Card/WhyChooseUsCard";
import "../../Style/WhyChooseUs.css";

const WhyChooseUs = () => {
  const cardData = [
    {
      heading: "Free Mock Test",
      image: "",
      content:
        "We are the only platform to provide application based unseen questions in CA Final Online Mock Test Series",
    },
    {
      heading: "Accounting Services",
      image: "",
      content:
        "We offer highly efficient accounting services which are provided by us for our local, national and international clients",
    },
    {
      heading: "Audit & Assurance Services",
      image: "",
      content:
        " Our wide range of services is aimed for financial stability of the clients and providing relevant details for assistance in decision making",
    },
    {
      heading: "Direct Tax Services",
      image: "",
      content:
        "We specialize in providing Income tax services to Individuals; Small & Medium scale businesses & large industries which are highly effective and efficient.",
    },

    {
      heading: "Corporate Law",
      image: "",
      content:
        "We have experts having great experience in company law matters. Our wide ranges of services include",
    },
  ];
  return (
    <Container>
      <Row className="whyChooseUs-wrapper">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="whyChooseUs-headingWrapper">
            <div className="whychoose-heading">WHY CHOOSE US</div>
            <div className="whychoose-subHeading">Why Choose S.E.M.T</div>
            <div className="whychoose-subHeadingColor">Expert Consultant</div>
          </div>
        </Col>

        <div className="testCard-wrapper">
          {cardData.map((item) => {
            return (
              <WhyChooseUsCard
                heading={item.heading}
                image={item.image}
                content={item.content}
              />
            );
          })}
        </div>

        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          className="text-center"
        >
          <button className="whyChooseBtn">SAY HELLO TO US</button>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
