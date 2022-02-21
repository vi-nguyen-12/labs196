import { dbConnect } from "../../../utils/mongodb";
import Presentor from "../../../models/Presentor";
import Cookies from "cookies";

const handler = async (req, res) => {
  const httpMethod = req.method;
  await dbConnect();
  switch (httpMethod) {
    case "GET":
      try {
        const presentors = await Presentor.find({});
        res.status(200).send(presentors);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    case "POST":
      try {
        const presentor = await Presentors.create({
          name: req.body.name,
          email: req.body.email,
        });
        // const cookies = new Cookies(req, res);
        // cookies.set("presentorId", presentor._id, {
        //   httpOnly: true,
        // });
        res.status(200).send(presentor);
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
