import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../auth/useUser";
import { useProtectedResources } from "../data/useProtectedResources";
import { postWithCredentials } from "../data/postWithCredentials";
import AcceptOrReject from "./AcceptOrReject";

const PaperAcceptOrRejectPage = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { data: paper, setData: setPaper } = useProtectedResources(
    `http://localhost:8080/papersrequest/${id}`,
    { owner: {}, requests: [] }
  );
  const acceptRequest = async (requestId) => {
    const response = await postWithCredentials(
      `http://localhost:8080/papers/${id}/requests/${requestId}/accept`
    );
    const updatedRequests = await response.json();
    setPaper({
      ...paper,
      requests: updatedRequests,
    });
  };
  const rejectRequest = async (requestId) => {
    const response = await postWithCredentials(
      `http://localhost:8080/papers/${id}/requests/${requestId}/reject`
    );
    const updatedRequests = await response.json();
    setPaper({
      ...paper,
      requests: updatedRequests,
    });
  };

  console.log(paper);

  return (
    <div className="centered-container-accept-reject-display">
      {paper.ownerId === user.uid ? (
        <AcceptOrReject
          paper={paper}
          requests={paper.requests}
          onAccept={acceptRequest}
          onReject={rejectRequest}
        />
      ) : null}
    </div>
  );
};

export default PaperAcceptOrRejectPage;
