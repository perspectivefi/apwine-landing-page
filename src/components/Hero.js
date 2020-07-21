import React from "react"
import classnames from "classnames"

import arrow from "../images/illustrations/arrow.svg"

const Hero = () => {
    return (
        <div className={classnames(
            "flex-1 flex flex-col bg-blue-500",
            "px-4 sm:px-8 lg:px-16 xl:px-20"
        )}>
            
            <div className="text-center text-white px-3 lg:px-0">
                <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight border-b-4 mx-auto border-opacity-25 border-blue-500" style={{width:"fit-content"}}>
                    Add live interaction to any video
                </h1>
                <p className="leading-normal text-gray-900 text-base md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
                    Upstreamer lets you engage your audience and build hype on your events
                </p>
            </div>

            <div className="flex items-center w-full mx-auto content-end">
                <div className="relative browser-mockup flex flex-1 mx-6 md:px-0 md:mx-32 bg-white rounded-lg shadow-xl">
                    <iframe
                        className="flex-1 rounded-b-lg"
                        src={`${process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://embed.upstreamer.app"}/youtube/5qap5aO4i9A?muted=1`}
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay" />
                    <div className="pointer-events-none">
                        <>
                            <span className="absolute left-0 top-0 transform -ml-8 text-white text-xl font-black md:block hidden" style={{ transform: "translateX(-100%) rotate(-15deg)" }}>
                                Try it out!
                            </span>
                            <img 
                                className="absolute left-0 top-0 transform -ml-2 mt-8 w-16 -translate-x-full md:block hidden"
                                src={arrow} />
                        </>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero