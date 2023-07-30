import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Style/WhoWeAre.css";
import whoWeAre from "../../Images/whoWeAre.png";
import "../../Style/WhyChooseUs.css";
import Training from "../../Images/training.png";
// import Corporate from "../../Images/corporate.png";
import HomePage from "./HomePage";
const WhoWeAre = () => {
  return (
    <>
      {" "}
      <Container>
        <Row className="whoWeAre-wrapper">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="whyChooseUs-headingWrapper">
              <div className="whychoose-heading">WHO WE ARE</div>
              <div className="whychoose-subHeading">
                Our Primary Service at&nbsp;
                <span className="whychoose-subHeadingColor">
                  S.E.M.T (Self Evaluating Mock Test)
                </span>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <img className="WhoWeAre-img" src={whoWeAre} alt="whoWeAre" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="whoWeAre-rightrow1">
              We are the only platform to provide application based unseen
              questions in CA Final Online Mock Test Series.The Quality of
              Questions and Evaluation makes S.E.M.T the best online test series
              for CA Final.
            </div>
            <div className="whoWeAre-rightrow2">
              <div className="whoWeAre-imgdiv">
                <img src={Training} alt="" />
              </div>
              <div>
                <div className="whoWeAre-rowheading">
                  Unlimited Free Mock Test
                </div>
                <div className="whoWeAre-rowcontent">
                  Aspirants can choose Chapter Wise or also can give test
                  according to ICAI pattern. This service is provided free for
                  any CA Final Aspirant.
                  <p>Please Note- Mock Test is Self Evaluatory</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <HomePage />
    </>
  );
};

export default WhoWeAre;
