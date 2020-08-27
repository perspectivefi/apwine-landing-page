import React from "react"

import classnames from "classnames"

export const Title = ({ className = undefined, children }) => (
    <h2 className={classnames(titleClass, className)}>{ children }</h2>
)

export const titleClass = "text-gray-800 text-3xl font-bold text-left"

export const Paragraph = ({ className = undefined, children }) => (
    <p className={classnames(paragraphClass, className)}>{ children }</p>
)

export const paragraphClass = "text-gray-600 text-xl leading-tight"