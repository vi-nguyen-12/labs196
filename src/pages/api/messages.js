import { dbConnect } from "../../utils/mongodb";
import Message from "../../models/Message";
import User from "../../models/User";

const handler = async (req, res) => {
  const httpMethod = req.method;
  await dbConnect();
  switch (httpMethod) {
    case "GET":
      const messages = await Message.find({}).populate("userId");
      let getResult = messages.map((item) => {
        return {
          _id: item._id,
          userId: item.userId._id,
          userName: item.userId.userName,
          message: item.message,
        };
      });
      res.status(200).send(getResult);
      break;
    case "POST":
      const message = await Message.create({
        userId: req.body.userId,
        message: req.body.message,
      });
      const user = await User.findOne({ _id: req.body.userId });
      const postResult = {
        _id: message._id,
        userId: user._id,
        userName: user.userName,
        message: message.message,
      };
      res.status(200).send(postResult);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).send({ error: `Method ${httpMethod} is not allowed` });
  }
};

export default handler;
