import React from "react"

import friends from "../images/illustrations/friends.svg"
import appreciation from "../images/illustrations/appreciation.svg"

const Benefits = () => {
    return (
        <section className="my-32">
            <div className="text-center text-blue-500 px-3 lg:px-0">
                <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight border-b-4 mx-auto border-opacity-25 border-blue-500" style={{width:"fit-content"}}>
                    Broadcast engaging content
                </h1>
                <p className="leading-normal text-gray-900 text-base md:text-xl lg:text-2xl mb-16 max-w-3xl mx-auto">
                    From live events to streams or vlogs, Upstreamer provides a new, non-intrusive layer of interaction
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-center mx-12 md:mx-32 lg:mx-64 gap-16">
                <div className="col-span-1">
                    <img src={friends} className="h-40 mb-8 mx-auto" alt="" />
                    <h2 className="mb-4 text-xl leading-tight font-bold">Interaction</h2>
                    <p className="text-md">People love to communicate. Give your viewers the chance to interact with each other and share their feelings on your content.</p>
                </div>
                <div className="col-span-1">
                    <img src={appreciation} className="h-40 mb-8 mx-auto" alt="" />
                    <h2 className="mb-4 text-xl leading-tight font-bold">Fun</h2>
                    <p className="text-md">Our platform was designed to make live interaction more fun. A new way to get engaged with your events means more audience retention.</p>
                </div>
            </div>
        </section>
    )
}

export default Benefits