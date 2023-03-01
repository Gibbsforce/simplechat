import messageIO from "../controllers/chat/index.js"
export const chat = (io) => {
  return async (socket) => {
    console.log(`Init socket with id: ${socket.id}`)
    const getMessage = await messageIO.getMessagesIO()
    socket.emit("getMessages", getMessage)
    console.log(`Messages gotten`)
    socket.on("sendMessage", async (message) => {
      await messageIO.saveMessageIO(message)
      console.log(`Message saved`)
      const getMessage = await messageIO.getMessagesIO()
      io.sockets.emit("getMessages", getMessage)
      console.log(`Messages gotten after`)
    })
  }
}
