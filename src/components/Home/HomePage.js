import React, { useState } from "react";
import Col from "react-bootstrap/col";
import { BsArrowRight } from "react-icons/bs";
import Row from "react-bootstrap/row";
import Container from "react-bootstrap/container";
import cardImage from "../../Images/cardImage.png";
import CardImage2 from "../../Images/CardImage2.png";
import cardImage3 from "../../Images/cardImage3.png";
const HomePage = () => {
  const [displayCardData, setDisplayCardData] = useState(false);
  const displayCardDataHadler = () => {
    setDisplayCardData(!displayCardData);
  };
  return (
    <div className="container-fluid">
      <Container className="cardContainer">
        <Row className="cardsRow">
          <Col className="cards card1 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src={cardImage} alt="card" />
                <span className="cardNumber">01</span>
              </div>
              <div className="cardHeading">
                <h3>Business Advisory</h3>
              </div>
              <div className="cardContent">
                <p>
                  We like to adopt the value added approach whereby we try to
                  find ways of improving peoples businesses and saving them
                  money
                  {!displayCardData ? (
                    <b onClick={displayCardDataHadler}>...</b>
                  ) : (
                    <>. </>
                  )}
                  {displayCardData && (
                    <span>
                      All accounts are prepared using the latest accountancy
                      software thus ensuring the highest standards and most
                      cost-effective service.
                    </span>
                  )}
                </p>
              </div>
              <div className="btn-container">
                <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="cards card2 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src={CardImage2} alt="card" />
                <span className="cardNumber">02</span>
              </div>
              <div className="cardHeading">
                <h3>Financial Structuring</h3>
              </div>
              <div className="cardContent">
                <p>
                  Provide services on capital structuring of a project, means of
                  finance and syndication and tie up resources from financial
                  institutions and banks etc.
                </p>
              </div>
              <div className="btn-container">
                <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="cards card3 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src={cardImage3} alt="card" />
                <span className="cardNumber">03</span>
              </div>
              <div className="cardHeading">
                <h3>Taxation</h3>
              </div>
              <div className="cardContent">
                <p>
                  Provide services in assisting Individuals, Firms, Societies,
                  Trusts & Corporate & other bodies in tax compliance and
                  returns preparation and filing.
                </p>
              </div>
              <div className="btn-container">
                <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
