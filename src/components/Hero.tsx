import React from "react"

import classnames from "classnames"
import styled from "styled-components"

import Container from "./Container"
import Button from "./Button"
import Wave from "./Wave"

import { FaTelegramPlane, FaTools } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"

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
                    APWine is a protocol allowing to trade unrealised APY.
                </h2>
                <h3 className={classnames(
                    "mt-8 text-lg font-normal text-gray-400 flex flex-row items-center"
                )}>
                    Launching in September 2020 <a href="https://twitter.com/apwinefinance" target="_blank" className="ml-2 hover:text-blue-500"><FiTwitter /></a>
                </h3>
                <div className={classnames(
                    "flex md:flex-row flex-col",
                    "mt-4"
                )}>
                    <Button
                        href="https://t.me/APWineFinance"
                        icon={FaTelegramPlane}>
                        Join the Telegram
                    </Button>
                    <Button
                        href="#"
                        icon={FaTools}
                        className="mt-4 md:mt-0 md:ml-4"
                        color="bg-gray-800"
                        local={false}>
                        Alpha available soon
                    </Button>
                </div>
            </Container>
        </div>
        <Wave />
    </GradientDiv>
)

export default Hero