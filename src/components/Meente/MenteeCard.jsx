import React from "react";

const MenteeCard = ({ image }) => {
  return (
    <div className="menteecard-carousel ">
      <div className="menteecards">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default MenteeCard;
