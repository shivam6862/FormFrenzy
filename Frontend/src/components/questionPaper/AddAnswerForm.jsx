import React from "react";

const AddAnswerForm = ({ questions, i, doneAnswer, OptionPoints }) => {
  console.log(questions);
  const question = questions[i];
  return (
    <div
      key={i}
      className={questions[i].open ? "each_question" : "each_question_closed"}
    >
      <div className="header_QuestionPaperEachQuestion">
        Select correct answer
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
                      name={i}
                      value={option.optionText}
                      id={option.optionText}
                      onClick={(e) => {
                        {
                          questions[i].answerKey.map((answerk, k) => {
                            if (k != j)
                              questions[i].answerKey[k].optionMark = "unmark";
                          });
                        }
                        questions[i].answerKey[j].optionMark = "mark";
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
                      name={i}
                      value={option.optionText}
                      id={option.optionText}
                      onChange={(e) => {
                        if (questions[i].answerKey[j].optionMark == "unmark") {
                          questions[i].answerKey[j].optionMark = "mark";
                        } else {
                          questions[i].answerKey[j].optionMark = "unmark";
                        }
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
