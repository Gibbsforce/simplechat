// Init socket
const socket = io()
// selecting the tags
const button = document.querySelector(".send-message")
const box = document.querySelector(".box-message")
// Rendering the messages
const renderMessages = (messages) => {
  const messageContent = messages
    .map(({ _id, username, content }) => {
      return `<div class="info-message"><span class="user">${username}: </span><span class="content">${content}</span></div>`
    })
    .join("")
  let messagesContainer = `<div class="user-message">${messageContent}</div>`
  document.querySelector(".message-container").innerHTML = messagesContainer
}
// sending the message
const sendMessage = async (e) => {
  e.preventDefault()
  const message = {
    username:
      document.querySelector(".user").value > 0
        ? document.querySelector(".user").value
        : "random user",
    content: document.querySelector(".box-message").value,
  }
  socket.emit("sendMessage", message)
  box.value = ""
}
// socket
socket.on("getMessages", async (data) => {
  renderMessages(data)
})
// storing the message
button.addEventListener("click", sendMessage)
box.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click()
  }
})
