import { useProtectedResources } from "../data/useProtectedResources";
import MyPapersList from "./PapersList";
import PapersList from "./PapersList";
import AllResultOfUser from "../result/AllResultOfUser";
import { postWithCredentials } from "../data/postWithCredentials";

const BrowsePapersPage = () => {
  var {
    isLoading: isLoadingMyPapers,
    data: myPapers,
    setData: setPaper,
  } = useProtectedResources(
    `${import.meta.env.VITE_REACT_BACKEND_URL}/my-papers/`,
    []
  );

  const { isLoading: isLoadingSharedPapers, data: sharedPapers } =
    useProtectedResources(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/shared/`,
      []
    );

  const onDeletePaper = async (paperId) => {
    const response = await postWithCredentials(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/deletequestionpaper`,
      { paperId }
    );
    const updatedPapers = await response.json();
    setPaper(updatedPapers);
  };

  return (
    <div>
      <h2 className="section-heading">My Papers</h2>
      <MyPapersList
        isLoading={isLoadingMyPapers}
        papers={myPapers}
        showNewButton={true}
        onDeletePaper={onDeletePaper}
      />
      <h2 className="section-heading">Shared With Me</h2>
      <PapersList
        isLoading={isLoadingSharedPapers}
        papers={sharedPapers}
        showNewButton={false}
      />
      <AllResultOfUser />
    </div>
  );
};

export default BrowsePapersPage;
