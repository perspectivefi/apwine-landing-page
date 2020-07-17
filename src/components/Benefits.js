import React from "react"

import friends from "../images/illustrations/friends.svg"
import appreciation from "../images/illustrations/appreciation.svg"

const Benefits = () => {
    return (
        <section class="my-32">
            <div class="text-center text-blue-500 px-3 lg:px-0">
                <h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
                    Broadcast engaging content
                </h1>
                <p class="leading-normal text-gray-900 text-base md:text-xl lg:text-2xl mb-8">
                    From live events to streams or vlogs, LiveRiver provides a new, non-intrusive layer of interaction
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 text-center mx-12 md:mx-32 lg:mx-64 gap-16">
                <div class="col-span-1">
                    <img src={friends} className="h-40 mb-8 mx-auto" />
                    <h2 class="mb-4 text-xl leading-tight font-bold">Interaction</h2>
                    <p class="text-md">People love to communicate. Give your users the chance to interact with each other and share their feelings on your content.</p>
                </div>
                <div class="col-span-1">
                    <img src={appreciation} className="h-40 mb-8 mx-auto" />
                    <h2 class="mb-4 text-xl leading-tight font-bold">Fun</h2>
                    <p class="text-md">Fun plays a big role in how long and how much attention one can give. A new way to get engaged with your events means more user retention.</p>
                </div>
            </div>
        </section>
    )
}

export default Benefits