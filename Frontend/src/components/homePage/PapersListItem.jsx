import { Link } from "react-router-dom";

const PapersListItem = ({ paper }) => (
  <Link to={`/questionpaper/${paper.id}`}>
    <div className="papers-list-item-wrap">
      <div>{paper.untitledDocument.untitledDocument}</div>
      <div>{paper.formDescription.formDescription}</div>
    </div>
  </Link>
);

export default PapersListItem;
