import { Empty } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const Accordion = ({ label = "", data = [], defaultIndex }) => {
  const [showQuestionsIndex, setshowQuestionsIndex] = useState(defaultIndex);

  const handleShowQuestions = (index) => {
    setshowQuestionsIndex(showQuestionsIndex === index ? -1 : index);
  };

  return (
    <div className="accordion">
      {label && <h3 className="accordion__title label">{label}</h3>}
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <DivContent
              key={item.id || item.title || index}
              className={`accordion__content ${
                showQuestionsIndex === index ? "active" : ""
              }`}
            >
              <div
                className="accordion__content-title"
                onClick={() => handleShowQuestions(index)}
              >
                <h4>
                  <strong>{item?.question || item?.title || ""}</strong>
                </h4>
              </div>

              {item?.description && (
                <div className="accordion__content-text --transparent">
                  {item?.description.map((desc, index) => {
                    return (
                      <div className="item --lock" key={index}>
                        <p>
                          <i>
                            <img
                              src="https://cfdcircle.vn/img/iconlock.svg"
                              alt="CFD Circle"
                            />
                          </i>
                          <span>{desc}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {item?.answer && (
                <div className="accordion__content-text">
                  {item.answer || ""}
                </div>
              )}
            </DivContent>
          );
        })
      ) : (
        <Empty description={"Không có dữ liệu"} />
      )}
    </div>
  );
};

const DivContent = styled.div`
  &:first-child {
    display: none;
  }
`;

export default Accordion;
