import persistence from "../index.js"
const { chatDAO } = persistence
const saveMessageIO = async (message) => {
  try {
    const content = await chatDAO.save(message)
    return content
  } catch (error) {
    console.log(`Error at sending message: ${error}`)
  }
}
const getMessagesIO = async () => {
  try {
    const contents = await chatDAO.getAll()
    return contents
  } catch (error) {
    console.log(`Error at getting the messages: ${error}`)
  }
}
const saveMessage = async (req, res) => {
  try {
    const contentMessage = {
      username: req.body.username,
      message: req.body.message,
    }
    const message = await chatDAO.save(contentMessage)
    res.status(201).json({
      message: "Created",
      description: "Message saved successfully",
      content: message,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      description: error,
    })
  }
}
const getMessages = async (req, res) => {
  try {
    const messages = await chatDAO.getAll()
    res.status(200).json({
      message: "OK",
      description: "Getting al messages",
      content: messages,
    })
    return messages
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      description: error,
    })
  }
}
export default {
  saveMessageIO,
  getMessagesIO,
  saveMessage,
  getMessages,
}
