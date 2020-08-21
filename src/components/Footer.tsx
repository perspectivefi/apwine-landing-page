import React from "react"

import classnames from "classnames"

import { Paragraph } from "./Text"

const Footer = () => (
    <div>
        <p className="text-gray-400 text-sm leading-tight">
            Bla Bla Bla. Legal Stuff. We're not responsible for anything. APY (Annual Percentage Yield) on your stake in the liquidity pool. Providing liquidity to margin traders is not risk-free and APY may vary. Ballpark figures based on simulation by Cap place the APY between 49% and 450% per year. A weighted average of 100% is displayed for indicative purposes. In periods of heavy trader gains, APY decreases, while in periods of heavy trader losses, APY increases.
            <br/><br/>
            © APWine, 2020. Website by <a href="https://uly.dev" className="hover:text-blue-500" target="_blank">ulydev</a>, inspired by <a href="https://cap.finance" className="hover:text-blue-500" target="_blank">cap.finance</a>
        </p>
        
    </div>
)

export default Footer