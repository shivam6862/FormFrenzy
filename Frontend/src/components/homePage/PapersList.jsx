import PapersListItem from "./PapersListItem";
import NewPaperButton from "./NewPaperButton";
import LoadingSpinner from "../ui/LoadingSpinner";

const papersList = ({ isLoading, papers, showNewButton, onDeletePaper }) =>
  isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="papers-list">
      {papers.map((paper) => (
        <PapersListItem
          key={paper.id}
          paper={paper}
          showNewButton={showNewButton}
          onDeletePaper={onDeletePaper}
        />
      ))}
      {showNewButton && <NewPaperButton />}
    </div>
  );

export default papersList;
