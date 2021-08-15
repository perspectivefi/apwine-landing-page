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
        "What is the APW token?",
        "The APW token is an ERC-20 token, with a primary focus on protocol governance through the APWine DAO."
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
        "You can mint them by locking your funds on our platform for a period of a future. Or you can buy them on our AMM and everywhere they are traded."
    ],
    [
        "Why would I stake my APW?",
        "The token follows a Curve-like form of voting escrow (veAPW) which has a Lock capability. Locking your APW for up to 2 years will yield an increased voting weight and share of protocol rewards. The longer you lock your APW, the more voting power you have. The APW token has not only utility, but a stake in the performance of the protocol."
    ],
    [
        "What are some of the use cases?",
        "You want to get involved in yield farming but the fluctuation of APYs scares you or getting your yield upfront is appealing to you. So you want to sell your interests at a fixed price to minimise impact from fluctuations and get your yield upfront. For example, after having deposited your DAI on Aave you can lock your aDAI in APWine for a week and trade in advance the yield that they will generate this week."
    ],
    [
        "What are the motivations behind the project? What problem does it solve?",
        "We want to create a financial instrument to trade future interest rates in DeFi. Also helping the farmers to hedge their risks, and farm with their own yield."
    ],
    [
        "Who is it for? Everybody? DeFi experts? The novices?",
        "APWine includes an exchange (AMM) where everyone will be able to trade future interests easily on it. We expect to get traction also from yield farmers, arbitrageurs, and traders."
    ]
]

const FAQ: FunctionComponent<{ limit?: number }> = ({ limit }) => {
    const [open, setOpen] = useState(null)
    return (
        <div className="mx-auto w-full max-w-2xl">
            <div className="flex flex-col items-center mx-auto space-y-4">
                <div className="w-5 h-1 bg-gradient-to-r from-primary-300 to-primary-200" />
                <span className="font-bold text-4xl text-white text-glow">Frequently Asked Questions</span>
            </div>
            <div className="mt-8 space-y-6">
                { (limit ? questions.slice(0, limit) : questions).map((([question, answer], i) => {
                    const currentOpen = open === question
                    return (
                        <div className="rounded-xl p-6 px-8 bg-primary-400 bg-opacity-50 text-white">
                            <button
                            className={classnames(
                                "flex flex-row items-center justify-between",
                                "w-full space-x-2",
                                "text-white hover:text-primary-100"
                            )}
                            onClick={() => setOpen(currentOpen ? null : question)}>
                                <h3 className="text-base font-bold text-left">{ question }</h3>
                                { currentOpen ? <FiMinus /> : <FiPlus /> }
                            </button>
                            { currentOpen ? <>
                                <div className="text-sm mt-8 opacity-75">{ answer }</div>
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
