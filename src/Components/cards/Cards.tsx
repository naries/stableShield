import React from "react";
import "./Cards.css";
type CardProps = {
  image: string;
  header: string;
  subTitle: string;
  proceedText: string;
  onProceed: () => void;
};
function Cards(props: CardProps) {
  const { header, image, onProceed, proceedText, subTitle } = props;
  return (
    <div className="cardsContainer">
      <img src={image} width={48} height={48}  alt=""/>
      <div>
        <p className="header_text">{header}</p>
        <p className="subtitle_text">{subTitle}</p>
        <button className="card_button" onClick={onProceed}>
          {proceedText}
        </button>
      </div>
    </div>
  );
}

export default Cards;
