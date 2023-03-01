import express from "express"
import chatControllers from "../../controllers/chat/index.js"
const chatRouter = express.Router()
chatRouter.post("/send", chatControllers.saveMessage)
chatRouter.get("/messages", chatControllers.getMessages)
export default chatRouter
