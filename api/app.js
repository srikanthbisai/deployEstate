import express from 'express';
import authRoute from './routes/auth.route.js'
import cookieParser from "cookie-parser";
import cors from "cors";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors({
  origin: "https://deploy-estate.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
 }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);


app.listen(8000, () => {
  console.log("Server is running on port 8000!");
});
