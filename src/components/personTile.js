import React from "react"
import { Link } from "gatsby"

import Tw from "../images/socials/tw.svg"

import "../styles/components/personTile.scss"

const PersonTile = props => {
  return (
    <div className={`person-tile`}>
      <div>
        {props.type && (
          <div className="position-type">{props.type}</div>
        )}
        {props.personName && (
          <div className="name">{props.personName}</div>
        )}
        {props.position && (
          <div className="position">{props.position}</div>
        )}
      </div>
      {props.twitterURL && <div className="twitter-tile">
        <Link target="_blank" to={props.twitterURL}>
          <Tw /> @{props.twitterURL.split("com/")[1]}
        </Link>
      </div>}
    </div>
  )
}

export default PersonTile
