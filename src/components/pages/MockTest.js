import React, { useState } from "react";
import { Select } from "antd";
import importantIcon from "../../Images/important.png";
import "../../Style/MockTest.css";
import chaptersData from "../../data.json";

const MockTest = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [chaptersData, setChaptersData] = useState([...data]);
  const [selectedChapter, setSelectedChapter] = useState("");
  // useEffect(() => {
  //   const fetchMockData = async () => {
  //     const response = await fetch("http://localhost:5000/test");
  //     const data = await response.json();
  //     return data;
  //   };

  //   fetchMockData().then((r) => setChaptersData(r));
  // }, []);
  const handleChange = (value) => {
    console.log(value);
    setSelectedChapter(value);
  };

  return (
    <div className="mock-test-main-container">
      <p>
        We recommend having an environment ready, so you can solve problems
        outside of the browser.
      </p>
      <h3>You can use any documentation, files, or other helpful resources.</h3>

      <Select
        mode="single"
        showArrow
        style={{ width: "50%" }}
        options={chaptersData?.[0]?.chapters?.map((item) => {
          return { value: item?.chapterTitle };
        })}
        onChange={handleChange}
      />
      <div className="question-container">
        {chaptersData?.[0]?.chapters
          ?.find(
            (selectedItem) => selectedItem.chapterTitle === selectedChapter
          )
          ?.testQA?.map((mockQues, index) => {
            return (
              <div key={index} className="question-inner-wrapper">
                {mockQues?.important && (
                  <img src={importantIcon} alt="important" />
                )}
                <p>
                  {mockQues?.question?.split("\\n")?.map((line, index) => {
                    return (
                      <React.Fragment key={index}>
                        {line} <br />
                      </React.Fragment>
                    );
                  })}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MockTest;
