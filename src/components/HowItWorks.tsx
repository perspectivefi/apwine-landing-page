import React from "react"

import classnames from "classnames"

import { Title, Paragraph } from "./Text"

const HowItWorks = () => (
    <div>
        <Title>How does it work?</Title>
        <Paragraph className="mt-8">
            APWine allows lenders to tokenize their future yield locking their bearing interests tokens for a defined amount of time. They can then trade this token, which enables its holder to redeem the yield after the locking period.
            <br/><br/>
            Learn more in our <a href="/APWine__Whitepaper.pdf" target="_blank" className="text-blue-500 font-bold hover:text-blue-600">whitepaper</a>, or check out the <a href="/blog" className="text-blue-500 font-bold hover:text-blue-600">blog</a> for more updates!
        </Paragraph>
    </div>
)

export default HowItWorks