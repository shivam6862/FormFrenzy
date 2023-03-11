const AcceptOrReject = ({ paper, requests, onAccept, onReject }) => (
  <div className="centered-container-accept-reject">
    <h2 className="section-heading">Join Requests</h2>
    {requests.length > 0 ? (
      requests.map((request) => (
        <div className="accept-reject-div">
          <h2>{paper.formDescription.formDescription}</h2>
          <h2>{paper.untitledDocument.untitledDocument}</h2>
          <h3>{request.userName}</h3>
          <div className="button-accept-request">
            <button onClick={() => onAccept(request.id)}>Accept</button>
            <button onClick={() => onReject(request.id)}>Reject</button>
          </div>
        </div>
      ))
    ) : (
      <p>No Pending Requests</p>
    )}
  </div>
);

export default AcceptOrReject;
