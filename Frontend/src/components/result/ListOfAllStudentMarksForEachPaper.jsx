const ListOfAllStudentMarksForEachPaper = ({ result, i }) => (
  <div className="result-list-item-each-paper">
    <div>Rank : {+i + 1}</div>
    <div>Name : {result.userName}</div>
    <div>Marks obtained : {result.marks}</div>
  </div>
);

export default ListOfAllStudentMarksForEachPaper;
