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

const Person = ({ img, name, twitter }) => (
    <div className="w-24 lg:w-auto lg:flex-1 flex flex-col rounded-xl overflow-hidden">
        <img src={img} className="w-24 lg:w-28" />
        <div className="flex flex-row items-center justify-between p-2 bg-primary-300 bg-opacity-20">
            <span className="text-white text-xs text-primary-100">{ name }</span>
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener referrer"><FaTwitter className="text-primary-200 text-sm" /></a>
        </div>
    </div>
)

const Team = () => (
    <div className="mx-auto flex flex-col items-center justify-center sm:w-full sm:max-w-lg lg:max-w-none lg:w-auto sm:grid sm:grid-cols-2 lg:flex lg:flex-row space-y-16 sm:space-y-0 lg:space-x-16">
        <div className="mx-auto lg:mx-0 flex flex-col space-y-2 w-52 lg:w-auto">
            <span className="text-white text-xl font-bold">Advisors</span>
            <div className="grid grid-cols-2 gap-4 lg:gap-0 lg:flex lg:flex-row lg:space-x-4">
                <Person img={julien} name="Julien B." twitter="bneiluj" />
                <Person img={marc} name="Marc Z." twitter="lemiscate" />
                <Person img={jiahua} name="Jiahua X." twitter="jiahuajavaxu" />
            </div>
        </div>
        <div className="mx-auto lg:mx-0 flex flex-col space-y-2 w-52 lg:w-auto">
            <span className="text-white text-xl font-bold">Team</span>
            <div className="grid grid-cols-2 gap-4 lg:gap-0 lg:flex lg:flex-row lg:space-x-4">
                <Person img={jean} name="Jean C." twitter="jean_chambras" />
                <Person img={gaspard} name="Gaspard P." twitter="gaspardpeduzzi" />
                <Person img={ulysse} name="Ulysse R." twitter="ulydev" />
                <Person img={antoine} name="Antoine M." twitter="L0GYKAL" />
            </div>
        </div>
    </div>
)

export default Team