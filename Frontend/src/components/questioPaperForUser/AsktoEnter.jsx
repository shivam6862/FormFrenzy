import React from "react";
import { useProtectedResources } from "../data/useProtectedResources";
import { postWithCredentials } from "../data/postWithCredentials";
import { useUser } from "../auth/useUser";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AsktoEnter = ({
  setConfirmEnter,
  questionPaper,
  setCurrentTimeToStart,
  setDateuserEnter,
}) => {
  const { isLoading, user } = useUser();
  const { id } = useParams();

  const { isLoading: isLoadingUsers, data: checkpaper } = useProtectedResources(
    `${import.meta.env.VITE_REACT_BACKEND_URL}/checkpaperdone/${id}`,
    null
  );

  const openthebutton = async () => {
    const response = await postWithCredentials(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/paperenter/${id}`,
      { user }
    );
    const updatedPaper = await response.json();
    const date = new Date();
    const time =
      date.getDate() +
      ":" +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    var a = time.split(":");
    var nowsecond = +a[0] * 60 * 60 * 24 + +a[1] * 60 * 60 + +a[2] * 60 + +a[3];

    setDateuserEnter(nowsecond);
    setConfirmEnter(true);
    var b = updatedPaper.split(":");
    var seconds =
      +b[0].substring(0, 2) * 60 * 60 * 24 +
      +b[1] * 60 * 60 +
      +b[2] * 60 +
      +b[3];
    setCurrentTimeToStart(seconds);
  };

  return (
    <div className="backdrop">
      <div className="asktoenterbox">
        <div>{questionPaper.formDescription.formDescription}</div>
        <div>{questionPaper.untitledDocument.untitledDocument}</div>
        {checkpaper == "notvisited" ? (
          <div className="twobutton">
            <button className="asktoenterbutton" onClick={openthebutton}>
              Click here to enter in the test.
            </button>
            <Link to={"/"}>
              <button className="asktoenterbutton">Go back</button>
            </Link>
          </div>
        ) : (
          <Link to={"/"}>
            <button className="asktoenterbutton">
              Click here to go back you had given the test
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AsktoEnter;
