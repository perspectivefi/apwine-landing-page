import React from "react";
import { Link } from "gatsby";

import Tw from "../images/socials/tw.svg";
import Bg from "../images/person-hover-bg.svg";

import "../styles/components/personTile.scss";

const PersonTile = (props) => {
  return (
    <div className="person-tile">
      <div className="image">
        <img src={props.imageURL} alt={props.personName} />
        <div className="hover-tile">
          <div className="bg">
            <Bg />
          </div>
          <Link to={props.twitterURL}>
            <Tw />
          </Link>
        </div>
      </div>
      {props.type.length > 0 && (
        <div className="position-type">{props.type}</div>
      )}
      {props.personName.length > 0 && (
        <div className="name">{props.personName}</div>
      )}
      {props.position.length > 0 && (
        <div className="position">{props.position}</div>
      )}
    </div>
  );
};

export default PersonTile;
