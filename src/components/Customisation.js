import React from "react"

import layout from "../images/illustrations/layout.svg"
import happy from "../images/illustrations/happy.svg"
import announcement from "../images/illustrations/announcement.svg"
import vr from "../images/illustrations/vr.svg"

const Customisation = () => {
    return (
        <section className="my-32">
            <div className="text-center text-blue-500 px-3 lg:px-0">
                <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight border-b-4 mx-auto border-opacity-25 border-blue-500" style={{width:"fit-content"}}>
                    Extensible
                </h1>
                <p className="leading-normal text-gray-900 text-base md:text-xl lg:text-2xl mb-16 max-w-3xl mx-auto">
                    Upstreamer turns your regular video into a welcoming place for your audience
                </p>
            </div>
            <div className="flex flex-col max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row mb-16 items-center">
                    <img src={layout} className="w-48 md:mr-8 mb-8 md:mb-0" />
                    <div className="flex flex-col text-center md:text-left">
                        <h2 className="mb-4 text-xl leading-tight font-bold">Custom Layout</h2>
                        <p className="text-md max-w-sm">Display your logo, a social network link, a donation form, or any HTML element on top of your stream.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse mb-16 items-center">
                    <img src={happy} className="w-48 md:ml-8 mb-8 md:mb-0" />
                    <div className="flex flex-col text-center md:text-right">
                        <h2 className="mb-4 text-xl leading-tight font-bold">Custom Reactions</h2>
                        <p className="text-md max-w-sm">Enable new custom reactions for your audience.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-16 items-center">
                    <img src={announcement} className="w-48 md:mr-8 mb-8 md:mb-0" />
                    <div className="flex flex-col text-center md:text-left">
                        <h2 className="mb-4 text-xl leading-tight font-bold">Announcements</h2>
                        <p className="text-md max-w-sm">Easily broadcast interactable announcements in real time, without having to fiddle with your video stream.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center">
                    <img src={vr} className="w-48 md:ml-8 mb-8 md:mb-0" />
                    <div className="flex flex-col text-center md:text-right">
                        <h2 className="mb-4 text-xl leading-tight font-bold">Upcoming VR support</h2>
                        <p className="text-md max-w-sm">Let your tech enthusiast viewers experience your stream in VR with WebVR-compatible headsets, with zero additional configuration.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customisation