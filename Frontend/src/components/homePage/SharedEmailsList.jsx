import { useState } from "react";

const SharedEmailsList = ({ emails, onShare }) => {
  const [inviteEmailValue, setInviteEmailValue] = useState("");
  return (
    <div className="question_form_place_share">
      <h3>Shared With :</h3>
      {emails.map((email) => (
        <div key={email}>
          <p>{email}</p>
        </div>
      ))}
      <div className="share-with-form">
        <input
          type="text"
          value={inviteEmailValue}
          placeholder="Enter an email address to share with.."
          onChange={(e) => setInviteEmailValue(e.target.value)}
        />
        <button
          className="conversation-button"
          onClick={() => {
            onShare(inviteEmailValue);
            setInviteEmailValue("");
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default SharedEmailsList;
