import { Server } from "socket.io";
import Message from "../../models/Message";
import User from "../../models/User";
import Event from "../../models/Event";

const ioHandler = async (req, res) => {
  if (!res.socket.server.io) {
    console.log("*First use, starting socket.io");
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      //Broadcast when a user connects
      socket.broadcast.emit("A user has joined the chat");
      socket.emit("welcome", "Welcome to Chat");

      //Runs when client disconnects
      socket.on("disconnect", () => {
        console.log("User has disconnected");
      });

      socket.on("start_chat", async ({ email }) => {
        const allowedEmail = ["james.sherwood@labs196.com"];
        if (allowedEmail.indexOf(email) > -1) {
          io.emit("open_chat");
        }
        const event = await Event.findOne({ name: "first_one" });
        event.isOpenChat = false;
        await event.save();
      });

      socket.on("send_message", async ({ userId, message }) => {
        const newMessage = await Message.create({ userId, message });
        const user = await User.findOne({ _id: userId });
        io.emit("message", {
          userId: user._id,
          userName: user.userName,
          message: newMessage.message,
        });
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("socket.io already running");
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;
