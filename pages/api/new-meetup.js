import { MongoClient } from "mongodb";

async function handler(req, res) {
  debugger;
  if (req.method === "POST") {
    const data = req.body;
    const client = MongoClient.connect(
      "mongodb+srv://maniksachdev99:manik123@cluster0.u5lcrfh.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = (await client).db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    res.status(201).json({ message: "success" });
  }
}

export default handler;
