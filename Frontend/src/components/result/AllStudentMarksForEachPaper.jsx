import { useProtectedResources } from "../data/useProtectedResources";
import LoadingSpinner from "../ui/LoadingSpinner";
import ListOfAllStudentMarksForEachPaper from "./ListOfAllStudentMarksForEachPaper";
import { useParams } from "react-router-dom";

const AllStudentMarksForEachPaper = () => {
  const { id } = useParams();

  const { isLoading: isLoadingMyResults, data: PaperResults } =
    useProtectedResources(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/resultpaper/${id}`,
      null
    );

  return (
    <div className="centered-container-conversation">
      <h2 className="section-heading">Results of User</h2>

      {isLoadingMyResults ? (
        <LoadingSpinner />
      ) : (
        <div className="results-list-result-each-paper">
          {PaperResults.map((result, i) => (
            <ListOfAllStudentMarksForEachPaper result={result} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllStudentMarksForEachPaper;
