import React from "react";

const AddAnswerForm = ({
  questions,
  i,
  doneAnswer,
  OptionPoints,
  OptionAnswer,
  setRadio,
  pushIntoAnswerCheckbox,
  pushIntoCheckbox,
  radio,
  checkbox,
}) => {
  console.log(questions);
  console.log(i);
  const question = questions[i];
  return (
    <div key={i} className={questions[i].open ? "each_question" : "each_question_closed"}>
      <div className="header_QuestionPaperEachQuestion">
        Choose correct answer
      </div>
      <div className="options" key={i}>
        <div
          onClick={() => {
            doneAnswer(i);
          }}
        >
          <button>Done Answer</button>
        </div>
        <input
          className="option_point_For_Evaluation"
          type="number"
          min={0}
          max={25}
          name="points"
          value={questions[i].points}
          id={i}
          onChange={(e) => {
            console.log(e.target.value);
            OptionPoints(e.target.value, i);
          }}
        />
      </div>
      <input
        placeholder="Give new Question here..."
        type="text"
        value={question.questionText}
      ></input>
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
                        OptionAnswer(e.target.value, i);
                      }}
                    />
                    <label htmlFor={option.optionText}>
                      <input
                        className="checkbox_item"
                        placeholder={"Option " + (Number(j) + 1)}
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
                        pushIntoAnswerCheckbox(e.target.value, i);
                        pushIntoCheckbox(e.target.value);
                      }}
                      checked={checkbox.includes(option.optionText)}
                    />
                    <label htmlFor={option.optionText}>
                      <input
                        className="checkbox_item"
                        placeholder={"Option " + (Number(j) + 1)}
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
                placeholder={"Option " + (Number(j) + 1)}
                type="text"
                value={option.optionText}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddAnswerForm;
