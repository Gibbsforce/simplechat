import PersistenceFactorySingleton from "../persistence/DAOs/index.js"
const persistence = PersistenceFactorySingleton.getInstance(process.env.STORAGE)
export default persistence
