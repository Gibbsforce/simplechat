import FileContainer from "../../models/FileContainer.js"
class ChatDAOFile extends FileContainer {
  constructor() {
    super("/chat.json")
  }
}
export default ChatDAOFile
