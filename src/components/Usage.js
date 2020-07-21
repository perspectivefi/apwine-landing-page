import React from "react"

import Highlight from "react-highlight"

const Usage = () => (
    <section className="my-32">
        <div className="text-center text-blue-500 px-3 lg:px-0">
            <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight border-b-4 mx-auto border-opacity-25 border-blue-500" style={{width:"fit-content"}}>
                Easy integration
            </h1>
            <p className="leading-normal text-gray-900 text-base md:text-xl lg:text-2xl mb-16 max-w-3xl mx-auto">
                With YouTube, Vimeo and more upcoming streaming services
            </p>
            <Highlight className="html text-left max-w-full mx-auto">
                {
                    '<iframe\n' +
                    ' src="https://embed.upstreamer.app/{mode}/{id}?muted=1"\n' +
                    ' frameborder="0" allowfullscreen allow="autoplay" />'
                }
            </Highlight>
        </div>
        
    </section>
)

export default Usage