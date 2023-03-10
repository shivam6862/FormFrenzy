import React from "react";
import { useState } from "react";

const QuestionPaper = ({ questionPaper }) => {
  console.log(questionPaper);
  const [radio, setRadio] = useState("");
  const [checkbox, setCheckbox] = useState([]);
  const [text, setText] = useState("");

  function pushIntoCheckbox(text) {
    var newCheckbox = [...checkbox];
    if (newCheckbox.includes(text)) {
      newCheckbox = newCheckbox.filter((item) => item !== text);
    } else {
      newCheckbox.push(text);
    }
    setCheckbox(newCheckbox);
    console.log(newCheckbox);
  }

  const SubmitTheQuestionPaper = async () => {
    console.log("Submitted the Answer!");
  };

  return (
    <div className="question_form">
      <div className="header_QuestionPaperQuestion">
        <div>{questionPaper.formDescription.formDescription}</div>
        <div>{questionPaper.untitledDocument.untitledDocument}</div>
      </div>
      <div>
        {questionPaper.AllQuestion.map((question, index) => (
          <div key={index} className="each_question">
            <div className="QuestionAsked_OnClosed">
              {index + 1}
              {"."}
              {question.questionText}
            </div>
            <div>
              {question.options.map((option, j) => (
                <div key={j} className="checkbox">
                  {question.questionType != "text" ? (
                    <>
                      {question.questionType == "radio" ? (
                        <>
                          <input
                            className="checkbox_box"
                            type={question.questionType}
                            name="Each_Option"
                            value={option.optionText}
                            id={option.optionText}
                            checked={radio === option.optionText}
                            onChange={(e) => {
                              console.log(e.target.value);
                              setRadio(e.target.value);
                            }}
                          />
                          <label htmlFor={option.optionText}>
                            <input
                              className="checkbox_item"
                              type="text"
                              value={option.optionText}
                            />
                          </label>
                        </>
                      ) : (
                        <>
                          <input
                            className="checkbox_box"
                            type={question.questionType}
                            name="Each_Option"
                            value={option.optionText}
                            id={option.optionText}
                            onChange={(e) => {
                              pushIntoCheckbox(e.target.value);
                            }}
                            checked={checkbox.includes(option.optionText)}
                          />
                          <label htmlFor={option.optionText}>
                            <input
                              className="checkbox_item"
                              type="text"
                              value={option.optionText}
                            />
                          </label>
                        </>
                      )}
                    </>
                  ) : (
                    <input
                      className="checkbox_item"
                      placeholder={"Write here..."}
                      type="text"
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="submitAnswerPaper_button">
        <button onClick={SubmitTheQuestionPaper} className="submitPaper">
          submit it
        </button>
      </div>
    </div>
  );
};

export default QuestionPaper;
