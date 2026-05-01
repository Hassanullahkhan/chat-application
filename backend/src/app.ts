import express from 'express'

import authRoutes from './routes/authRoute'
import chatRoutes from './routes/chatRoutes'
import messageRoutes from './routes/messageRoutes'
import userRoutes from './routes/userRoutes'

const app = express()

// const PORT = process.env.PORT || 3000


//middleware
app.use(express.json())
// parses incoming JSON request bodies and makes them available as req.body in your route handlers



 //check for api is running?
app.get("/health", (req,res) => {
    res.json({status: "ok", message: "api get is running"})
})

app.use("/api/auth", authRoutes)
app.use("/api/chats", chatRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// we will import all the routes files inside this folder

export default app