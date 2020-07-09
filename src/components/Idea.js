import React from "react"

import illustration1 from "../images/illustrations/my_app.svg"
import illustration2 from "../images/illustrations/landscape_mode.svg"

const Idea = () => (
    <section className="px-32 py-12">
        <h2 className="text-3xl mb-8 text-center font-heading">Le principe</h2>
        <div class="flex flex-col md:flex-row xl:px-32">
            <div class="flex flex-col items-center md:px-6 lg:px-12">
                <span class="text-6xl text-primary">
                    <img className="my-8" src={illustration1} />
                </span>
                <p class="text-center text-secondary-700 leading-relaxed">
                    Connectez-vous à un guide qui se trouve à l'endroit que vous aimeriez visiter, grâce à la carte interactive
                </p>
            </div>
            <div class="flex flex-col items-center md:px-6 lg:px-12">
                <span class="text-6xl text-primary">
                    <img className="my-8" src={illustration2} />
                </span>
                <p class="text-center text-secondary-700 leading-relaxed">
                    Avec son smartphone, le guide vous montre tout ce que vous voulez voir en direct, comme si vous y étiez
                </p>
            </div>
        </div>
    </section>
)

export default Idea