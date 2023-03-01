import ChatDAOFile from "./chat/ChatDAOFile.js"
class PersistenceFactorySingleton {
  static instance
  constructor() {
    this.chatDAO = null
  }
  static getInstance(persistence) {
    if (!!PersistenceFactorySingleton.instance) {
      return PersistenceFactorySingleton.instance
    }
    if (persistence === "file") {
      this.chatDAO = new ChatDAOFile()
      PersistenceFactorySingleton.instance = this
      return this
    }
  }
}
export default PersistenceFactorySingleton
