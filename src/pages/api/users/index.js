import { dbConnect } from "../../../utils/mongodb";
import User from "../../../models/User";
import Cookies from "cookies";

const handler = async (req, res) => {
  const httpMethod = req.method;
  await dbConnect();
  switch (httpMethod) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).send(users);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    case "POST":
      try {
        console.log(req.body);
        const user = await User.create({
          userName: req.body.userName,
          email: req.body.email,
        });
        const cookies = new Cookies(req, res);
        console.log(cookies);
        cookies.set("userId", user._id, {
          httpOnly: true,
        });
        res.status(200).send(user);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).send({ error: `Method ${httpMethod} is not allowed` });
  }
};

export default handler;
