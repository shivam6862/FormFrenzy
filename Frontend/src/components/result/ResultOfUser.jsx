import { useProtectedResources } from "../data/useProtectedResources";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";
import ResultOfUserItem from "./ResultOfUserItem";

const ResultOfUser = () => {
  const { id } = useParams();
  const { isLoading: isLoadingMyResult, data: myResult } =
    useProtectedResources(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/result/${id}`,
      null
    );
  console.log(myResult);

  return (
    <div>
      <h2 className="result-list-item result-list-item-heading">
        Description of Result
      </h2>
      {isLoadingMyResult ? (
        <LoadingSpinner />
      ) : (
        <div className="results-list-result">
          <ResultOfUserItem result={myResult} />
        </div>
      )}
    </div>
  );
};

export default ResultOfUser;
