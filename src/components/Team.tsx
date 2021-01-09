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
        <div className="flex flex-row items-center justify-between p-2 bg-primary-dark bg-opacity-20">
            <span className="text-white text-xs text-primary-light">{ name }</span>
            <a href="twitter"><FaTwitter className="text-primary text-sm" /></a>
        </div>
    </div>
)

const Team = () => (
    <div className="flex flex-row space-x-16">
        <div className="flex flex-col space-y-2">
            <span className="text-white text-xl font-bold">Advisors</span>
            <div className="flex flex-row space-x-4">
                <Person img={julien} name="Julien B." twitter="" />
                <Person img={marc} name="Marc Z." twitter="" />
                <Person img={jiahua} name="Jiahua X." twitter="" />
            </div>
        </div>
        <div className="flex flex-col space-y-2">
            <span className="text-white text-xl font-bold">Members</span>
            <div className="flex flex-row space-x-4">
                <Person img={jean} name="Jean C." twitter="" />
                <Person img={gaspard} name="Gaspard P." twitter="" />
                <Person img={ulysse} name="Ulysse R." twitter="" />
                <Person img={antoine} name="Antoine M." twitter="" />
            </div>
        </div>
        <div className="flex flex-col space-y-2">
            <span className="text-white text-xl font-bold">Investor</span>
            <div className="flex flex-row space-x-4">
                <Person img={julien} name="Julien B." twitter="" />
            </div>
        </div>
    </div>
)

export default Team