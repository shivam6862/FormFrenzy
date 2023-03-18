import { useProtectedResources } from "../data/useProtectedResources";
import LoadingSpinner from "../ui/LoadingSpinner";
import AllResultOfUserItem from "./AllResultOfUserItem";

const AllResultOfUser = () => {
  const { isLoading: isLoadingMyResults, data: myResults } =
    useProtectedResources(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/results/`,
      null
    );

  return (
    <div>
      <h2 className="section-heading">Results of User</h2>
      {isLoadingMyResults ? (
        <LoadingSpinner />
      ) : (
        <div className="results-list-result">
          {myResults.map((result) => (
            <AllResultOfUserItem result={result} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllResultOfUser;
