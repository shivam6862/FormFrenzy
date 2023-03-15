import React, { useEffect, useState } from "react";
import QuestionPaper from "./QuestionPaper";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useProtectedResources } from "../data/useProtectedResources";
import ConversationsListPage from "../conversations/ConversationsListPage";
import NewConversationPage from "../conversations/NewConversationPage";

import SharedEmailsList from "../homePage/SharedEmailsList";
import { useUser } from "../auth/useUser";
import { postWithCredentials } from "../data/postWithCredentials";

import RequestToJoin from "../requestToJoin/RequestToJoin";
import PaperAcceptOrRejectPage from "../requestToJoin/PaperAcceptOrRejectPage";

import AllStudentMarksForEachPaper from "../result/AllStudentMarksForEachPaper";

import AsktoEnter from "./AsktoEnter";

const QuestionPaperForUser = () => {
  const [confirmEnter, setConfirmEnter] = useState(false);
  const [currentTimeToStart, setCurrentTimeToStart] = useState("");
  const [dateuserEnter, setDateuserEnter] = useState(0);
  console.log(confirmEnter);

  const { id } = useParams();
  const { isLoading: isLoadingUsers, data: questionPaper } =
    useProtectedResources(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/papers/${id}`,
      null
    );
  console.log(questionPaper);

  const Answerpaper = [];
  if (
    questionPaper != null &&
    questionPaper.message != "User is not allowed to get paper!"
  ) {
    questionPaper.AllQuestion.map((question, index) => {
      const AnswerBody = {
        questionType: "radio",
        optionsMark: [{ optionMark: "unmark" }],
      };
      AnswerBody.questionType = question.questionType;
      for (var i = 0; i < question.options.length - 1; i++) {
        AnswerBody.optionsMark.push({ optionMark: "unmark" });
      }
      Answerpaper.push(AnswerBody);
    });
    console.log(Answerpaper);
  }

  const { user } = useUser();
  const {
    isLoading,
    data: paper,
    setData: setPaper,
  } = useProtectedResources(
    `${import.meta.env.VITE_REACT_BACKEND_URL}/papers/${id}`,
    {}
  );
  const userIsOwner = user.uid === paper.ownerId;
  const shareWithEmail = async (email) => {
    const response = await postWithCredentials(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/papers/${id}/shared-with`,
      { email }
    );
    const updatedPaper = await response.json();
    setPaper(updatedPaper);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", warning);
    function warning(e) {
      e.returnValue = "";
    }
    return () => {
      console.log("ok");
      window.removeEventListener("beforeunload", warning);
    };
  }, []);

  var [index, setIndex] = useState(0);
  useEffect(() => {
    const goenTime = dateuserEnter - currentTimeToStart;
    if (
      questionPaper != null &&
      questionPaper.message != "User is not allowed to get paper!"
    ) {
      const timeToPut = +questionPaper.time.time * 60 - goenTime;
      if (index < 0) setIndex(timeToPut);
    }
    if (index > 0) {
      setTimeout(() => {
        setIndex(--index);
      }, 1000);
    }
  }, [index, currentTimeToStart, dateuserEnter]);

  return (
    <div className="AnswerPaper_box">
      {!isLoadingUsers && !isLoading ? (
        <>
          {!confirmEnter ? (
            <AsktoEnter
              setConfirmEnter={setConfirmEnter}
              questionPaper={questionPaper}
              setCurrentTimeToStart={setCurrentTimeToStart}
              setDateuserEnter={setDateuserEnter}
            />
          ) : (
            <div className="QuestionPaper-for-user-three-part">
              <div className="QuestionPaper-for-user-second-part">
                {questionPaper.message ==
                "User is not allowed to get paper!" ? (
                  <div className="header_QuestionPaperQuestion">
                    <RequestToJoin />
                  </div>
                ) : (
                  <div>
                    <div className="CurrentTimeToStart">
                      Time Started : {index} sec
                    </div>
                    <ConversationsListPage />
                    <NewConversationPage />
                    <PaperAcceptOrRejectPage />
                    <AllStudentMarksForEachPaper />
                  </div>
                )}
              </div>
              <div className="QuestionPaper-for-user-one-part">
                {questionPaper.message ==
                "User is not allowed to get paper!" ? (
                  <div className="header_QuestionPaperQuestion">
                    {user.email} {"is not allowed to get paper!"}
                  </div>
                ) : (
                  <QuestionPaper
                    questionPaper={questionPaper}
                    Answerpaper={Answerpaper}
                  />
                )}
                <div>
                  {userIsOwner && (
                    <SharedEmailsList
                      emails={paper.sharedWithEmails}
                      onShare={shareWithEmail}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <LoadingSpinner />
        </>
      )}
    </div>
  );
};

export default QuestionPaperForUser;
