import React from "react"

import classnames from "classnames"

export const Title = ({ className = undefined, children }) => (
    <h2 className={classnames("text-gray-800 text-3xl font-bold text-left", className)}>{ children }</h2>
)

export const Paragraph = ({ className = undefined, children }) => (
    <p className={classnames("text-gray-600 text-xl leading-tight", className)}>{ children }</p>
)