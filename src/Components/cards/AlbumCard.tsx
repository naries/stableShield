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
      <img src={image} width={189} height={144} alt="" />
      <div className="itemsContainer">
        <div className="albumBottomContainer">
          <img src={eventImage} width={20} height={20} alt="" />
          <p>{date}</p>
        </div>
        <div className="alb_ontainer">
          <p className="albumHeader">{header}</p>
          <p className="albumSubtitle">{subTitle}</p>
        </div>
        <p>{more}</p>
        <div className="albumBottomContainer">
          <img src={locationImage} alt="" width={20} height={20} />
          <p>{address}</p>
        </div>
        <div className="albumBottomContainer">
          <img src={clockImage} alt="" width={20} height={20} />
          <p>{time}</p>
        </div>
        <button className="card_button" onClick={onProceed}>
          {proceedText}
        </button>
      </div>
    </div>
  );
}

export default AlbumCard;
