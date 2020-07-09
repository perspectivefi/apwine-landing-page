import React from "react"

import museumSvg from "../images/icons/museum.svg"
import shopSvg from "../images/icons/shop.svg"
import personSvg from "../images/icons/person.svg"

const FeatureCard = ({ label, image, children }) => (
    <div className="mx-16 sm:mx-32 md:mx-4 my-6 max-w-full md:max-w-xs relative overflow-hidden">
        <div className="bg-orange-500 rounded-lg shadow-lg">
            <div className="relative p-8 flex items-center justify-center">
                <div className="relative bg-white p-8 rounded-full">
                    <img className="relative w-24" src={image} alt="" />
                </div>
            </div>
        </div>
        <div className="relative text-black px-6 pb-6 mt-6">
            <div className="flex justify-between">
                <span className="block font-semibold text-xl">{ label }</span>
            </div>
            <p className="flex justify-between block leading-relaxed">{ children }</p>
        </div>
    </div>
)

const Features = () => (
    <section className="py-12 px-4">
        <h2 className="text-3xl mb-8 text-center font-heading">3 types de visites</h2>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start">
            <FeatureCard label="Musées" image={museumSvg}>
                Visitez des expositions, rejoignez des présentations inédites en groupe, depuis chez vous
            </FeatureCard>
            <FeatureCard label="Boutiques" image={shopSvg}>
                Obtenez des conseils de professionels et effectuez des achats directement depuis l'application
            </FeatureCard>
            <FeatureCard label="Guides privés" image={personSvg}>
                Explorez un lieu ou un évènement en direct, grâce à nos guides certifiés
            </FeatureCard>
        </div>
    </section>
)

export default Features