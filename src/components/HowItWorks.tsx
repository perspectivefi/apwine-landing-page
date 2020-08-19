import React from "react"

import classnames from "classnames"

import { Title, Paragraph } from "./Text"

const HowItWorks = () => (
    <div>
        <Title>How does it work?</Title>
        <Paragraph className="mt-8">
            It works with pure magic.
            If you don't believe us just check the <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" className="text-blue-500 font-bold hover:text-blue-600" target="_blank">whitepaper</a> for yourselves.
        </Paragraph>
    </div>
)

export default HowItWorks