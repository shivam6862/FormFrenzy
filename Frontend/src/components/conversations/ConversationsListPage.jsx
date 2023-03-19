import { Link } from "react-router-dom";
import { useProtectedResources } from "../data/useProtectedResources";
import { useUser } from "../auth/useUser";
import LoadingSpinner from "../ui/LoadingSpinner";

const ConversationsListPage = () => {
  const { user } = useUser();
  const { isLoading, data: conversations } = useProtectedResources(
    `${import.meta.env.VITE_REACT_BACKEND_URL}/users/${user.uid}/conversations`,
    []
  );

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="centered-container-conversation">
      <h1 className="section-heading"> Conversation List</h1>
      {conversations.map((conversation) => (
        <Link to={`/conversations/${conversation._id}`} key={conversation._id}>
          <div className="list-item">
            <h3>{conversation.name}</h3>
            <p>{conversation.memberIds.length} members</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ConversationsListPage;
