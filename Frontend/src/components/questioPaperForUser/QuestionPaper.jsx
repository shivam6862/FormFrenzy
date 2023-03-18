import React from "react";
import { useUser } from "../auth/useUser";
import { postWithCredentials } from "../data/postWithCredentials";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const QuestionPaper = ({ questionPaper, Answerpaper }) => {
  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();

  const SubmitTheQuestionPaper = async () => {
    const response = await postWithCredentials(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/addanswerpaper/${id}`,
      { Answerpaper }
    );
    const newGroupId = await response.json();
    navigate(`/`);
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
            <div className="QuestionAskedInExamPaper">
              <div className="QuestionAsked_OnClosed">
                {index + 1}
                {"."}
                {question.questionText}
              </div>
              <div className="points">points {question.points}</div>
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
                            name={index}
                            value={option.optionText}
                            id={option.optionText}
                            onClick={(e) => {
                              {
                                Answerpaper[index].optionsMark.map(
                                  (option, k) => {
                                    Answerpaper[index].optionsMark[
                                      k
                                    ].optionMark = "unmark";
                                  }
                                );
                              }
                              Answerpaper[index].optionsMark[j].optionMark =
                                "mark";
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
                              if (
                                Answerpaper[index].optionsMark[j].optionMark ==
                                "unmark"
                              )
                                Answerpaper[index].optionsMark[j].optionMark =
                                  "mark";
                              else
                                Answerpaper[index].optionsMark[j].optionMark =
                                  "unmark";
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
                      )}
                    </>
                  ) : (
                    <input
                      className="checkbox_item"
                      placeholder={"Write here..."}
                      type="text"
                      onChange={(e) => {
                        Answerpaper[index].optionsMark[0].optionMark =
                          e.target.value;
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
        <button
          disabled={user.reloadUserInfo.localId == questionPaper.ownerId}
          onClick={SubmitTheQuestionPaper}
          className="submitPaper"
        >
          submit it
        </button>
      </div>
    </div>
  );
};

export default QuestionPaper;
