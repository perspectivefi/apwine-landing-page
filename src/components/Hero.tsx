import React from "react"

import classnames from "classnames"
import styled from "styled-components"

import Container from "./Container"
import Button from "./Button"
import Wave from "./Wave"

import { FaTelegramPlane, FaTools } from "react-icons/fa"

import logo from "../images/logo.png"
import Bubbles from "./Bubbles"

const GradientDiv = styled.div`
    background:
        linear-gradient(calc(180deg - 10deg), rgba(0, 0, 0, 0.0) 30%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.2) 100%),
        linear-gradient(#82c7f4, #bfe6e2);
`

const Hero = () => (
    <GradientDiv className="relative flex flex-col min-h-screen">
        <Bubbles />
        <div className={classnames(
            "flex-1",
            "flex flex-col",
            "items-center",
            "justify-center",
            "z-10" // draw above bubbles
        )}>
            <Container className="flex flex-col items-center">
                <img src={logo} className="w-24" />
                <h2 className={classnames(
                    "mt-8 text-4xl font-bold leading-relaxed text-white text-center"
                )}>
                    APWine is a special DEX allowing to trade unreleased APY.
                </h2>
                <h3 className={classnames(
                    "mt-8 text-2xl font-bold text-gray-800"
                )}>
                    Launching in September 2020
                </h3>
                <div className={classnames(
                    "flex flex-row",
                    "mt-4"
                )}>
                    <Button
                        href="https://test.com"
                        icon={FaTelegramPlane}>
                        Join the Telegram
                    </Button>
                    <Button
                        href="https://test.com"
                        icon={FaTools}
                        className="ml-4">
                        Try the Alpha
                    </Button>
                </div>
            </Container>
        </div>
        <Wave />
    </GradientDiv>
)

export default Hero