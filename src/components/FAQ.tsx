import React, { useState, FunctionComponent } from "react"

import classnames from "classnames"

import { Title, Paragraph } from "./Text"
import Divider from "./Divider"

import { FiPlus, FiMinus } from "react-icons/fi"

const questions = [
    [
        "What would be the point of locking tokens inside your protocol?",
        "You can instantly sell your unrealised yield to hedge against price movement."
    ],
    [
        "What is the idea behind APWine, in one sentence?",
        "The APWine protocol locks funds to generate interests which are tokenized as futures, enabling a DeFi user to trade unrealised yield."
    ],
    [
        "Will there be a token?",
        "The APWine protocol will issue an APW token. Its mechanisms and distribution will be announced soon in an upcoming blog post."
    ],
    [
        "Why is the bearing interest token locked for the period corresponding to the future?",
        "Locking this token is necessary in order to generate the interest during the entire period. The possibility of withdrawing your fund during a future period will be added later."
    ],
    [
        "How is it possible to trade our interest before it is even realised?",
        "While locking the bearing interest tokens during the period corresponding to the future, the protocol mints a number of future interest tokens that correspond to the amount of funds locked by the user. This token is tradable and will allow its holder to redeem the yield gathered by our smart contract at the expiration of a future. Market actors can therefore speculate in the future value of the yield of an asset (for example a Dai deposit on Compound) by selling or buying this future interest token."
    ],
    [
        "Where can we get those future interest tokens?",
        "You can mint them by locking your funds on our platform for a period of a future. Or you can buy them on our exchange and everywhere they are traded."
    ],
    [
        "What are the incentives for the APW token holders?",
        "At each future expiration, 1% of the generated yield is shared between all APW token holders (percentage subject to change in the future based on the market demand). The token will also enable them to participate in the governance mechanisms of APWine."
    ],
    [
        "What are some of the use cases?",
        "You want to get involved in yield farming but the fluctuation of APYs scares you. So you want to sell your interests at a fixed price to minimise impact from fluctuations. For example, after having deposited your DAI on Compound you can lock your cDAI in APWine for a week and trade in advance the yield that they will generate this week."
    ],
    [
        "What are the motivations behind the project? What problem does it solve?",
        "We want to create a financial instrument to trade future interest rates in DeFi. Also helping the farmers to hedge their risks, and farm with their own yield."
    ],
    [
        "Who is it for? Everybody? DeFi experts? The novices?",
        "APWine includes an exchange where everyone will be able to trade future interests easily on it. We expect to get traction also from yield farmers, arbitrageurs, and traders."
    ]
]

const FAQ: FunctionComponent<{ limit?: number }> = ({ limit }) => {
    const [open, setOpen] = useState(null)
    return (
        <div>
            <Title>FAQ</Title>
            <div className="mt-8">
                { (limit ? questions.slice(0, limit) : questions).map((([question, answer], i) => {
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
            { limit ? <Paragraph className="mt-16">
                For more questions and answers, please read the full <a href="/faq" className="text-blue-500 font-bold hover:text-blue-600">FAQ</a>.
            </Paragraph> : null }
        </div>
    )
}

export default FAQ