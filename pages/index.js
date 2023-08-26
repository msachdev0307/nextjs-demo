import React, { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg",
//     address: "Some Address",
//     description: "this is a 1st meetup",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg",
//     address: "Some Address",
//     description: "this is a 2nd meetup",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg",
//     address: "Some Address",
//     description: "this is a 3rd meetup",
//   },
//   {
//     id: "m4",
//     title: "A Fourth Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg",
//     address: "Some Address",
//     description: "this is a 4th meetup",
//   },
// ];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}></MeetupList>;
};
export async function getStaticProps() {
  const client = MongoClient.connect(
    "mongodb+srv://maniksachdev99:manik123@cluster0.u5lcrfh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = (await client).db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  return {
    props: {
      meetups: meetups.map((item) => ({
        title: item.title,
        address: item.address,
        image: item.image,
        id: item._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };

export default HomePage;
