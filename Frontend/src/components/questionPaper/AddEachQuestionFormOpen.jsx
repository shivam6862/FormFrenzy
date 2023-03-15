import React from "react";
import { useState } from "react";
import AllOptionButton from "./AllOptionButton";

const AddEachQuestionFormOpen = ({
  questions,
  i,
  addOptionsToEachQuestion,
  copyTheQuestion,
  deleteTheQuestion,
  requiredQuestion,
  addAnswer,
  changeQuestionType,
  changeQuestionText,
  changeQuestionOption,
  RemoveOptionsToEachQuestion,
  setQuestions,
}) => {
  const question = questions[i];

  const [dragItem, setDragItem] = useState(null);
  const [dragOverItem, setDragOverItem] = useState(null);

  const dragStart = (e, position) => {
    setDragItem(position);
  };

  const dragEnter = (e, position) => {
    console.log(position);
    setDragOverItem(position);
  };

  const drop = (e) => {
    const copyQuestionItems = [...questions];
    console.log(dragItem, dragOverItem);
    const dragOnItemContent = copyQuestionItems[dragItem];
    const dragOverItemContent = copyQuestionItems[dragOverItem];
    copyQuestionItems.splice(dragItem, 1, dragOverItemContent);
    copyQuestionItems.splice(dragOverItem, 1, dragOnItemContent);
    setDragItem(null);
    setDragOverItem(null);
    setQuestions(copyQuestionItems);
    console.log(copyQuestionItems);
  };

  return (
    <div
      key={i}
      className={questions[i].open ? "each_question" : "each_question_closed"}
      onDragStart={(e) => dragStart(e, i)}
      onDragEnter={(e) => dragEnter(e, i)}
      // onDragEnd={drop}
      draggable
    >
      <AllOptionButton
        i={i}
        addOptionsToEachQuestion={addOptionsToEachQuestion}
        copyTheQuestion={copyTheQuestion}
        deleteTheQuestion={deleteTheQuestion}
        requiredQuestion={requiredQuestion}
        addAnswer={addAnswer}
        changeQuestionType={changeQuestionType}
      />

      <input
        placeholder="Give new Question here..."
        type="text"
        value={question.questionText}
        onChange={(e) => {
          changeQuestionText(e.target.value, i);
        }}
      ></input>
      <div>
        {question.options.map((option, j) => (
          <div key={j} className="checkbox">
            {question.questionType != "text" ? (
              <>
                {question.questionType == "radio" ? (
                  <>
                    <input
                      disabled
                      className="checkbox_box"
                      type={question.questionType}
                      name={i}
                      value={option.optionText}
                      id={option.optionText}
                      onClick={(e) => {
                        {
                          questions[i].answerKey.map((answerk, k) => {
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
                        onChange={(e) => {
                          changeQuestionOption(e.target.value, i, j);
                        }}
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      disabled
                      className="checkbox_box"
                      type={question.questionType}
                      name="Each_Option"
                      value={option.optionText}
                      id={option.optionText}
                      onChange={(e) => {}}
                    />
                    <label htmlFor={option.optionText}>
                      <input
                        className="checkbox_item"
                        placeholder={"Option " + (Number(j) + 1)}
                        type="text"
                        value={option.optionText}
                        onChange={(e) => {
                          changeQuestionOption(e.target.value, i, j);
                        }}
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
                // "(" + String.fromCharCode(j + 65) + ") "
                value={option.optionText}
                onChange={(e) => {
                  changeQuestionOption(e.target.value, i, j);
                }}
              />
            )}
            <div
              className="removeOption"
              onClick={() => {
                RemoveOptionsToEachQuestion(i, j);
              }}
            >
              <button>Remove Option</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddEachQuestionFormOpen;
