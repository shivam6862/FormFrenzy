import { useParams } from "react-router-dom";
import { postWithCredentials } from "../data/postWithCredentials";
const RequestToJoin = () => {
  const { id } = useParams();
  const requestToJoinFunction = async () => {
    const url = `http://localhost:8080/papers/${id}/requests`;
    const response = await postWithCredentials(url);
    alert("Your request has been submitted!");
  };

  return (
    <div className="RequestToJoinButton">
      <button onClick={requestToJoinFunction}>Ask to Join</button>
    </div>
  );
};

export default RequestToJoin;
