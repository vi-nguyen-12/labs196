import { dbConnect } from "../../../utils/mongodb";
import Event from "../../../models/Event";

const handler = async (req, res) => {
  const httpMethod = req.method;
  await dbConnect();
  switch (httpMethod) {
    case "GET":
      try {
        const events = await Event.find({});
        res.status(200).send(events);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    case "POST":
      try {
        // const {name,field,presentors,time, youtubeLink}=req.body;

        const newEvent = await Event.create({
          name: "first_one",
        });

        res.status(200).send(newEvent);
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
