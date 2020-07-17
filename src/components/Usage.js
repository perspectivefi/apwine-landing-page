import React from "react"

import Highlight from "react-highlight"

const Usage = () => (
    <section class="my-32">
        <div class="text-center text-blue-500 px-3 lg:px-0">
            <h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
                Usage
            </h1>
            <p class="leading-normal text-left text-gray-900 text-base md:text-md lg:text-lg mx-6 md:px-0 md:mx-32">
                <Highlight className="html">
                    {
                        '<iframe\n' +
                        ' src="https://site.com/youtube/5qap5aO4i9A?muted=1"\n' +
                        ' frameborder="0"\n' + 
                        ' webkitallowfullscreen mozallowfullscreen allowfullscreen\n' +
                        ' allow="autoplay; fullscreen" />'
                    }
                </Highlight>
            </p>
        </div>
        
    </section>
)

export default Usage