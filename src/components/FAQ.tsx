import React, { useState } from "react"

import classnames from "classnames"

import { Title, Paragraph } from "./Text"
import Divider from "./Divider"

import { FiPlus, FiMinus } from "react-icons/fi"

const FAQ = () => {
    const [open, setOpen] = useState(null)

    const questions = [
        [
            "What would be the interest to lock tokens inside your protocol?",
            "You can instantly sell your unrealised APY to hedge against price movement."
        ],
        [
            "Why would I be interested in the governance token?",
            "The token will be useful to decide in which direction the project is going to go, and vote on particular functionalities. Token Holders also get as a reward 1% of the pool of every expiring \"contracts\"."
        ],
        [
            "What are the risks of locking my funds in your protocol?",
            "The only risk to take into account is that of yield protocol SC failure."
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