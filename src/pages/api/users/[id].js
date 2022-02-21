import { dbConnect } from "../../../utils/mongodb";
import User from "../../../models/User";
import Cookies from "cookies";

const handler = async (req, res) => {
  await dbConnect();
  const userId = req.query.id;
  console.log(userId);
  try {
    const user = await User.findById(userId);
    // const cookies = new Cookies(req, res);
    // cookies.set("userId", user._id);
    // console.log(cookies);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default handler;
