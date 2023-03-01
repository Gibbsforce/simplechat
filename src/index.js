import { dotenv } from "./config.js"
import express from "express"
import { Server as HttpServer } from "http"
import { Server as SocketServer } from "socket.io"
import router from "./routers/index.js"
import { chat } from "./middlewares/chat.js"

const app = express()
const server = new HttpServer(app)
const io = new SocketServer(server)
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("./public", { extensions: ["html"] }))
app.use("/api", router)

app.use("/api", (req, res) => {
  res.json({
    message: "Hello world from API!",
  })
})

io.on("connection", chat(io))

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
server.on("error", (error) => console.log(error))
