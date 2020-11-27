import React from "react"

import classnames from "classnames"
import styled from "styled-components"

import Container from "./Container"
import Button from "./Button"
import Wave from "./Wave"

import { FaTelegramPlane } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"
import { RiNewspaperLine } from "react-icons/ri"

import logo from "../images/logo_outline_small.png"
import Bubbles from "./Bubbles"

const GradientDiv = styled.div`
    /*background:
        linear-gradient(calc(180deg - 10deg), rgba(0, 0, 0, 0.0) 30%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.2) 100%),
        linear-gradient(#82c7f4, #bfe6e2);*/
`

const Hero = () => (
    <GradientDiv className="relative flex flex-col min-h-screen bg-gray-900">
        <Bubbles />
        <div className={classnames(
            "flex-1",
            "flex flex-col",
            "items-center",
            "justify-center",
            "z-10" // draw above bubbles
        )}>
            <Container className="flex flex-col items-center">
                <img src={logo} className="w-32" />
                <h2 className={classnames(
                    "mt-8 text-4xl font-bold leading-normal text-white text-center"
                )}>
                    APWine is a protocol allowing to trade unrealised yield.
                </h2>
                <h3 className={classnames(
                    "mt-8 text-lg font-normal text-gray-400 flex flex-row items-center"
                )}>
                    Launching in January 2021 <a href="https://twitter.com/apwinefinance" target="_blank" className="ml-2 hover:text-blue-500"><FiTwitter /></a>
                </h3>
                <div className={classnames(
                    "flex flex-col",
                    "mt-4"
                )}>
                    <Button
                        href="https://t.me/APWineFinance"
                        icon={FaTelegramPlane}>
                        Join the Telegram
                    </Button>
                    {/* <Button
                        href="/APWine___Whitepaper.pdf"
                        className="mt-4"
                        icon={RiNewspaperLine}>
                        Read the Whitepaper
                    </Button> */}
                    <Button
                        href="https://alpha.apwine.fi"
                        className="mt-4"
                        icon={AiFillStar}
                        local={false}>
                        Try the Alpha
                    </Button>
                </div>
            </Container>
        </div>
        <Wave />
    </GradientDiv>
)

export default Hero