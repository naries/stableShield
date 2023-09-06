import React from "react";
import "./Cards.css";
type CardProps = {
  image: string;
  header: string;
  subTitle: string;
  proceedText: string;
  onProceed: () => void;
  locationImage: string;
  address: string;
  clockImage: string;
  date: string;
  time: string;
  more: string;
  eventImage: string;
};
function AlbumCard(props: CardProps) {
  const {
    header,
    image,
    address,
    locationImage,
    clockImage,
    date,
    more,
    time,
    onProceed,
    eventImage,
    proceedText,
    subTitle,
  } = props;
  return (
    <div className="albumCardsContainer">
      <div className="imgContain">
        <img src={image} width={189} height={144} alt="" />
      </div>
      <div className="secondContainer">
        <div className="albumBottomContainer">
          <img
            src={eventImage}
            width={20}
            height={20}
            alt=""
            style={{ marginRight: 10 }}
          />
          <span>{date}</span>
        </div>
        <div className="album_container">
          <span className="albumHeader">{header}</span>
          <span className="albumSubtitle">{subTitle}</span>
        </div>
        <span>{more}</span>
        <div className="albumBottomContainer">
          <img src={locationImage} alt="" width={20} height={20} style={{ marginRight: 10 }}/>
          <span>{address}</span>
        </div>
        <div className="albumBottomContainer">
          <img src={clockImage} alt="" width={20} height={20} style={{ marginRight: 10 }}/>
          <span>{time}</span>
        </div>
        <button className="card_button" onClick={onProceed}>
          {proceedText}
        </button>
      </div>
    </div>
  );
}

export default AlbumCard;
