import React, { Fragment } from "react";
import MeetupItem from "../../components/meetups/MeetupItem";
import { MongoClient } from "mongodb";
const MeetupDetails = (props) => {
  return (
    <Fragment>
      <MeetupItem props={props} />
    </Fragment>
  );
};
export async function getStaticPaths() {
  const client = MongoClient.connect(
    "mongodb+srv://maniksachdev99:manik123@cluster0.u5lcrfh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = (await client).db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  (await client).close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      id: meetupId,
      title: "A First Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg",
      address: "Some Address",
      description: "this is a 1st meetup",
    },
  };
}

export default MeetupDetails;
