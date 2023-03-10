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

const QuestionPaperForUser = () => {
  const { id } = useParams();
  const { isLoading: isLoadingUsers, data: questionPaper } =
    useProtectedResources(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/papers/${id}`,
      null
    );
  console.log(questionPaper);

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

  return (
    <div className="AnswerPaper_box">
      {!isLoadingUsers && !isLoading ? (
        <div className="QuestionPaper-for-user-three-part">
          <div className="QuestionPaper-for-user-second-part">
            <ConversationsListPage />
            <NewConversationPage />
          </div>
          <div className="QuestionPaper-for-user-one-part">
            <QuestionPaper questionPaper={questionPaper} />
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
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default QuestionPaperForUser;
