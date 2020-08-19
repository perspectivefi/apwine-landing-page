import React from "react"

import classnames from "classnames"

import { Title, Paragraph } from "./Text"

const Person = ({ image, name, description }) => (
    <div className="flex flex-row items-center mt-16">
        <img src={image} className="rounded-full w-24 h-24" />
        <div className="flex flex-col ml-8">
            <h3 className="text-gray-800 text-xl font-bold text-left">{ name }</h3>
            <Paragraph className="mt-2">{ description }</Paragraph>
        </div>
    </div>
)

const Team = () => (
    <div>
        <Title>Team</Title>
        <Person image="https://placehold.it/512x512" name="John Doe" description="John Doe is a really cool guy. Truly. He built Microsoft when he was only 4 years old. Then went to Harvard at 6." />
        <Person image="https://placehold.it/512x512" name="John Doe" description="John Doe is a really cool guy. Truly. He built Microsoft when he was only 4 years old. Then went to Harvard at 6." />
        <Person image="https://placehold.it/512x512" name="John Doe" description="John Doe is a really cool guy. Truly. He built Microsoft when he was only 4 years old. Then went to Harvard at 6." />
    </div>
)

export default Team