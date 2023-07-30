import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whoWeAre from "../../Images/whoWeAre.png";
import "../../Style/WhoWeAre.css";
import { BsBoxArrowRight } from "react-icons/bs";
import "../../Style/AboutUsWhoWeAre.css";
const AboutUsWhoWeAre = () => {
  return (
    <div className="AboutUsWhoWeAre-Outerwrapper">
      <Container>
        <Row className="AboutUsWhoWeAre-wrapper">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="aboutuswho-we-are-imgdiv">
              <img className="WhoWeAre-img" src={whoWeAre} alt="whoWeAre" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="AboutUsWhoWeAre-heading">WHO WE ARE</div>
            <div className="AboutUsWhoWeAre-subHeading">
              S.E.M.T&nbsp;
              <span className="AboutUsWhoWeAre-subHeadingColor">
                Associates
              </span>
            </div>
            <div className="AboutUsWhoWeAre-row1">
              Auditing & Assurance Services are the core of any successful and
              visionary Organisation. We at S.E.M.T, employ advanced techniques
              and creative approach in Auditing for better financial & administ-
              rative controls. We also suggest improvements for more efficient
              operation, stronger financial structure and improved system of
              accounting and administrative controls.
            </div>
            <div className="AboutUsWhoWeAre-row2">
              Our Audit and Assurance services add efficiency and profitability
              to your organization by providing independent credibility to your
              financial statements, professional advices to management, and
              expedient solutions to improve the systems & performance.
            </div>
            <div className="AboutUsWhoWeAre-line">
              <span className="AboutUsWhoWeAre-lineIcon">
                <BsBoxArrowRight />
              </span>
              <span className="sub-heading">
                Our streamlined and optimized processes save you time, effort,
                and expenses
              </span>
            </div>
            <div className="AboutUsWhoWeAre-line">
              <span className="AboutUsWhoWeAre-lineIcon">
                <BsBoxArrowRight />
              </span>
              <span className="sub-heading">
                We understand risk management for brands
              </span>
            </div>
            <div className="AboutUsWhoWeAre-line">
              <span className="AboutUsWhoWeAre-lineIcon">
                <BsBoxArrowRight />
              </span>
              <span className="sub-heading">
                Our employees are expert and professional
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsWhoWeAre;
