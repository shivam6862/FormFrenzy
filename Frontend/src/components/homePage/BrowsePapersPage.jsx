import { useProtectedResources } from "../data/useProtectedResources";
import MyPapersList from "./PapersList";
import PapersList from "./PapersList";
import AllResultOfUser from "../result/AllResultOfUser";

const BrowsePapersPage = () => {
  const { isLoading: isLoadingMyPapers, data: myPapers } =
    useProtectedResources(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/my-papers/`,
      []
    );

  const { isLoading: isLoadingSharedPapers, data: sharedPapers } =
    useProtectedResources(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/shared/`,
      []
    );

  return (
    <div>
      <h2 className="section-heading">My Papers</h2>
      <MyPapersList
        isLoading={isLoadingMyPapers}
        papers={myPapers}
        showNewButton={true}
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
