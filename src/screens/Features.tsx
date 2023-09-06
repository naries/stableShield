import React from "react";
import "./onboarding/styles/styles.css";
import Cards from "../Components/cards/Cards";
import AlbumCard from "../Components/cards/AlbumCard";

function Features() {
  const handleClick = () => {};
  const data = [
    {
      img: require("../img/ticktodo.png"),
      header: "Events & Meetings",
      subtitle:
        "Quickly, conveniently and easily register for events, meetings and conferences from the comfort of your home or anywhere.",
      continueTitle: "Register",
      continueAction: handleClick,
    },
    {
      img: require("../img/bank.png"),
      header: "Secure Payment",
      subtitle:
        "Make secure payment for registration, dues and other fees easily and conveniently and get a receipt for payment.",
      continueTitle: "Register",
      continueAction: handleClick,
    },
    {
      img: require("../img/speaker.png"),
      header: "Information & Updates",
      subtitle:
        "Stay up to date with news, information and updates. Never miss out on important and relevant information.",
      continueTitle: "Register",
      continueAction: handleClick,
    },
  ];
  const album_data = [
    {
      img: require("../img/album.png"),
      eventImage: require("../img/ticktodo.png"),
      header: "Event Title",
      eventDate: "30 Dec, 2021",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum faucibus id sed pellentesque. Quam interdum lacinia eu pretium. Elit euismod... ",
      continueTitle: "Register",
      more: "Find out more",
      location: "Event Location/Address",
      locationImage: require("../img/location.png"),
      clockImage: require("../img/clock.png"),
      time: "12:00PM GMT+1",
      continueAction: handleClick,
    },
    {
      img: require("../img/album.png"),
      eventImage: require("../img/ticktodo.png"),
      header: "Event Title",
      eventDate: "30 Dec, 2021",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum faucibus id sed pellentesque. Quam interdum lacinia eu pretium. Elit euismod... ",
      continueTitle: "Register",
      more: "Find out more",
      location: "Event Location/Address",
      locationImage: require("../img/location.png"),
      clockImage: require("../img/clock.png"),
      time: "12:00PM GMT+1",
      continueAction: handleClick,
    },
    {
      img: require("../img/album.png"),
      eventImage: require("../img/ticktodo.png"),
      header: "Event Title",
      eventDate: "30 Dec, 2021",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum faucibus id sed pellentesque. Quam interdum lacinia eu pretium. Elit euismod... ",
      continueTitle: "Register",
      more: "Find out more",
      location: "Event Location/Address",
      locationImage: require("../img/location.png"),
      clockImage: require("../img/clock.png"),
      time: "12:00PM GMT+1",
      continueAction: handleClick,
    },
  ];
  return (
    <div className="featuresContainer">
      <h3 className="specialHeader">Special Features for you</h3>
      <div className="cardsFeaturesContainer">
        {data.map((items, index) => (
          <Cards
            key={items.img}
            header={items.header}
            image={items.img}
            onProceed={items.continueAction}
            proceedText={items.continueTitle}
            subTitle={items.subtitle}
          />
        ))}
      </div>
      <div className="cardsFeaturesContainer_two">
        <h3 className="specialHeader">Featured Events</h3>
        <div className="cardsFeaturesContainer">
          {album_data.map((items, index) => (
            <AlbumCard
              key={index}
              image={items.img}
              header={items.header}
              more={items.more}
              subTitle={items.subtitle}
              date={items.eventDate}
              eventImage={items.eventImage}
              proceedText={items.continueTitle}
              onProceed={() => items.continueAction}
              locationImage={items.locationImage}
              address={items.location}
              clockImage={items.clockImage}
              time={items.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
