import React from "react"

import classnames from "classnames"

const Diagram = ({ img, mode = "left", title, text }) => (
    <div className="flex flex-col items-center mx-auto my-24">
        <div className={`flex ${ mode === "left" ? "flex-row-reverse space-x-reverse" : "flex-row" } space-x-12 items-center`}>
            <div className="flex flex-col space-y-4 w-full max-w-xs text-white">
                <div className="w-5 h-1 bg-gradient-to-r from-primary-dark to-primary" />
                <span className="font-bold text-4xl">{ title }</span>
                <span className="font-text text-sm text-primary-light">{ text }</span>
            </div>
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-black to-primary opacity-10 transform -translate-x-1/2 -translate-y-1/2" />
                <img className="relative z-10 h-80" src={img} alt="diagram" />
            </div>
        </div>
    </div>
)

export default Diagram