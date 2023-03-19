import { Link } from "react-router-dom";

const PapersListItem = ({ paper, showNewButton, onDeletePaper }) => {
  return (
    <div className="papers-list-item-wrap">
      <div>{paper.untitledDocument.untitledDocument}</div>
      <div>{paper.formDescription.formDescription}</div>
      <Link to={`/questionpaper/${paper.id}`}>
        <div className="options optionshome">
          <button>Start paper</button>
        </div>
      </Link>
      {showNewButton && (
        <div
          className="options optionshome"
          onClick={() => {
            onDeletePaper(paper.id);
          }}
        >
          <button className="optionsrequired">delete Paper</button>
        </div>
      )}
    </div>
  );
};

export default PapersListItem;
