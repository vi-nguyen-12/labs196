import { dbConnect } from "../../utils/mongodb";
import User from "../../models/User";
import Cookies from "cookies";

const handler = async (req, res) => {
  await dbConnect();
  const cookies = new Cookies(req, res);
  const userId = cookies.get("userId");
  if (!userId) {
    return res.status(200).send({ isLoggedIn: false });
  }
  const user = await User.findById(userId);
  return res.status(200).send({
    _id: user.id,
    userName: user.userName,
    isLoggedIn: true,
  });
};

export default handler;
