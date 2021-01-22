import React from "react"

import styled from "styled-components"

import classnames from "classnames"

import gaspard from "../images/team/gaspard.jpg"
import antoine from "../images/team/antoine.jpg"
import ulysse from "../images/team/ulysse.jpg"
import jean from "../images/team/jean.jpg"

import julien from "../images/team/julien.png"

import jiahua from "../images/team/jiahua.jpg"
import marc from "../images/team/marc.jpg"

import { FaTwitter } from "react-icons/fa"

const Person = ({ img, name, twitter, description }) => (
    <div className="relative w-28 lg:w-auto lg:flex-1 flex flex-col rounded-xl">
        <img src={img} className="w-28 lg:w-28 rounded-t-xl" />
        <div className="w-28 lg:w-28 flex flex-col p-2 bg-primary-300 bg-opacity-20 rounded-b-xl">
            <div className="flex flex-row items-center justify-between">
                <span className="text-white text-xs text-primary-100">{ name }</span>
                <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener referrer" className="hover:text-primary-100 transition duration-300 text-primary-200 text-sm"><FaTwitter /></a>
            </div>
            <span className="absolute bottom-0 left-0 right-0 text-center text-xs text-primary-200 -mb-5 opacity-75">{ description }</span>
        </div>
    </div>
)

const Team = () => (
    <div className="mx-auto flex flex-col items-start justify-center sm:w-full sm:max-w-2xl lg:max-w-none lg:w-auto sm:grid sm:grid-cols-2 lg:flex lg:flex-row space-y-16 sm:space-y-0 lg:space-x-16">
        <div className="mx-auto lg:mx-0 flex flex-col space-y-2 w-64 lg:w-auto">
            <span className="text-white text-xl font-bold">Advisors</span>
            <div className="grid grid-cols-2 gap-10 lg:gap-0 lg:flex lg:flex-row lg:space-x-4">
                <Person img={julien} name="Julien B." twitter="bneiluj" description="Stake Capital, Curve" />
                <Person img={marc} name="Marc Z." twitter="lemiscate" description="Aave" />
                <Person img={jiahua} name="Jiahua X." twitter="jiahuajavaxu" description="EPFL, UCL" />
            </div>
        </div>
        <div className="mx-auto lg:mx-0 flex flex-col space-y-2 w-64 lg:w-auto">
            <span className="text-white text-xl font-bold">Team</span>
            <div className="grid grid-cols-2 gap-10 lg:gap-0 lg:flex lg:flex-row lg:space-x-4">
                <Person img={jean} name="Jean C." twitter="jean_chambras" description="Comm, Branding" />
                <Person img={gaspard} name="Gaspard P." twitter="gaspardpeduzzi" description="Protocol Lead" />
                <Person img={ulysse} name="Ulysse R." twitter="ulydev" description="Frontend Lead" />
                <Person img={antoine} name="Antoine M." twitter="L0GYKAL" description="DeFi Evangelist" />
            </div>
        </div>
    </div>
)

export default Team