import React, { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const addMeetupHandler = async (data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  };
  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </Fragment>
  );
};

export default NewMeetupPage;
