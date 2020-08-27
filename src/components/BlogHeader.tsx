import React from "react"

import classnames from "classnames"

import Container from "./Container"
import Wave from "./Wave"
import Bubbles from "./Bubbles"

import logo from "../images/logo_outline_small.png"

const BlogHeader = () => (
    <div className="bg-gray-900 flex flex-col relative">
        <Bubbles />
        <Container className="flex flex-row items-center justify-start w-full -mb-2 z-10">
            <img src={logo} className="w-16" />
            <div className="ml-2 flex flex-col">
                <h2 className={classnames(
                    "text-3xl font-bold leading-tight text-white text-center"
                )}>
                    APWine Blog
                </h2>
                <a href="/" className="text-sm text-gray-400 hover:text-blue-500 leading-tight">Back to <b>apwine.fi</b></a>
            </div>
        </Container>
        <Wave />
    </div>
)

export default BlogHeader