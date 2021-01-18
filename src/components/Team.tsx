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
    <div className="flex-1 flex flex-col rounded-xl overflow-hidden">
        <img src={img} className="w-28" />
        <div className="flex flex-row items-center justify-between p-2 bg-primary-300 bg-opacity-20">
            <span className="text-white text-xs text-primary-100">{ name }</span>
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener referrer"><FaTwitter className="text-primary-200 text-sm" /></a>
        </div>
    </div>
)

const Team = () => (
    <div className="flex flex-row space-x-16">
        <div className="flex flex-col space-y-2">
            <span className="text-white text-xl font-bold">Advisors</span>
            <div className="flex flex-row space-x-4">
                <Person img={julien} name="Julien B." twitter="bneiluj" />
                <Person img={marc} name="Marc Z." twitter="lemiscate" />
                <Person img={jiahua} name="Jiahua X." twitter="jiahuajavaxu" />
            </div>
        </div>
        <div className="flex flex-col space-y-2">
            <span className="text-white text-xl font-bold">Members</span>
            <div className="flex flex-row space-x-4">
                <Person img={jean} name="Jean C." twitter="jean_chambras" />
                <Person img={gaspard} name="Gaspard P." twitter="gaspardpeduzzi" />
                <Person img={ulysse} name="Ulysse R." twitter="ulydev" />
                <Person img={antoine} name="Antoine M." twitter="L0GYKAL" />
            </div>
        </div>
        <div className="flex flex-col space-y-2">
            <span className="text-white text-xl font-bold">Investor</span>
            <div className="flex flex-row space-x-4">
                <Person img={julien} name="Julien B." twitter="bneiluj" />
            </div>
        </div>
    </div>
)

export default Team