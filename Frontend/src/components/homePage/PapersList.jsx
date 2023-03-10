import PapersListItem from "./PapersListItem";
import NewPaperButton from "./NewPaperButton";
import LoadingSpinner from "../ui/LoadingSpinner";

const papersList = ({ isLoading, papers, showNewButton }) =>
  isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="papers-list">
      {papers.map((paper) => (
        <PapersListItem key={paper.id} paper={paper} />
      ))}
      {showNewButton && <NewPaperButton />}
    </div>
  );

export default papersList;
