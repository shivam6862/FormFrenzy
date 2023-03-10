const getConversation = require("./getConversation");

module.exports = getCanUserAccessConversation = async (
  userId,
  conversationId
) => {
  const conversation = await getConversation(conversationId);
  return conversation.memberIds.includes(userId);
};
