import React from "react"

import styled from "styled-components"

import classnames from "classnames"

import gaspard from "../images/team/gaspard.png"
import antoine from "../images/team/antoine.png"
import ulysse from "../images/team/ulysse.jpg"
import jean from "../images/team/jean.png"
import julien from "../images/team/julien.png"
import jiahua from "../images/team/jiahua.jpg"
import marc from "../images/team/marc.jpg"
import mat from "../images/team/mat.jpeg"
import red from "../images/team/red.jpeg"
import sam from "../images/team/sam.jpeg"
import dan from "../images/team/dan.jpeg"
import ayush from "../images/team/ayush.jpeg"
import daniel from "../images/team/daniel.png"

import { FaTwitter } from "react-icons/fa"

const Person = ({ img, name, twitter, description }) => (
  <div className="w-28 flex flex-col rounded-xl">
    <div className="w-28 h-28">
      <img src={img} className="w-28 object-cover lg:w-28 rounded-t-xl" />
    </div>
    <div className="w-28 flex flex-col p-2 bg-primary-300 bg-opacity-20 rounded-b-xl">
      <div className="flex flex-row items-center justify-between">
        <span className="text-white text-xs text-primary-100">{name}</span>
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener referrer"
            className="hover:text-primary-100 transition duration-300 text-primary-200 text-sm"
          >
            <FaTwitter />
          </a>
        )}
      </div>
    </div>
    <span className="text-center text-xs text-primary-200 opacity-75">
      {description}
    </span>
  </div>
)

const Team = () => (
  <div className="lg:flex lg:space-x-8 space-y-8 lg:space-y-0">
    <div className="mx-auto lg:mx-0 flex flex-col space-y-2 w-64 lg:w-full">
      <span className="text-white text-xl font-bold">Advisors</span>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <Person
          img={julien}
          name="Julien B."
          twitter="bneiluj"
          description="Stake Capital, Curve"
        />
        <Person
          img={marc}
          name="Marc Z."
          twitter="lemiscate"
          description="Aave"
        />
        <Person
          img={jiahua}
          name="Jiahua X."
          twitter="jiahuajavaxu"
          description="EPFL, UCL"
        />
      </div>
    </div>

    <div className="mx-auto lg:mx-0 flex flex-col space-y-2 w-64 lg:w-full">
      <span className="text-white text-xl font-bold">Team</span>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <Person
          img={jean}
          name="Jean C."
          twitter="jean_chambras"
          description="Full stack"
        />
        <Person
          img={gaspard}
          name="Gaspard P."
          twitter="gaspardpeduzzi"
          description="Protocol"
        />
        <Person
          img={ulysse}
          name="Ulysse R."
          twitter="ulydev"
          description="UI / UX"
        />
        <Person
          img={antoine}
          name="Antoine M."
          twitter="L0GYKAL"
          description="Integrations"
        />
        <Person
          img={ayush}
          name="Ayush T."
          twitter="Ayush_XXX_"
          description="Solidity"
        />
        <Person img={mat} name="Mat F." twitter="" description="Full Stack" />
        <Person
          img={daniel}
          name="Daniel T."
          twitter=""
          description="Full Stack"
        />
        <Person
          img={red}
          name="Red"
          twitter="smokatokey"
          description="Marketing"
        />
        <Person
          img={sam}
          name="Sam"
          twitter="Sam48152259"
          description="Community"
        />
      </div>
    </div>
  </div>
)

export default Team
