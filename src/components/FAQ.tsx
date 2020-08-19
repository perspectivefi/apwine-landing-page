import React, { useState } from "react"

import classnames from "classnames"

import { Title, Paragraph } from "./Text"
import Divider from "./Divider"

import { FiPlus, FiMinus } from "react-icons/fi"

const FAQ = () => {
    const [open, setOpen] = useState(null)

    const questions = [
        [
            "Is it true that you take 4%?",
            "Yes it's true. We believe it's good enough to buy a lambo and two model S."
        ],
        [
            "How experienced are you in DeFi?",
            "Our team has 30+ years of experience in the industry. We were there before it even started."
        ]
    ]

    return (
        <div>
            <Title>FAQ</Title>
            <div className="mt-8">
                { questions.map((([question, answer], i) => {
                    const currentOpen = open === question
                    return (
                        <div>
                            <button
                            className={classnames(
                                "flex flex-row items-center justify-between",
                                "w-full",
                                "py-4",
                                currentOpen && "text-blue-500",
                                "text-gray-800 hover:text-blue-600"
                            )}
                            onClick={() => setOpen(currentOpen ? null : question)}>
                                <h3 className="text-xl font-bold text-left">{ question }</h3>
                                { currentOpen ? <FiMinus /> : <FiPlus /> }
                            </button>
                            <Divider />
                            { currentOpen ? <>
                                <Paragraph className="my-8">{ answer }</Paragraph>
                                { (i < questions.length - 1) ? <Divider /> : null }
                            </> : null }
                        </div>
                    )
                })) }
            </div>
        </div>
    )
}

export default FAQ