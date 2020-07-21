import React, { useState } from "react"
import classnames from "classnames"

import MailchimpSubscribe from "react-mailchimp-subscribe"

const SubscribeForm = () => {
    const url = "//dev.us10.list-manage.com/subscribe/post?u=491036d7b2a61e4b2f0eff1a9&amp;id=ef49af2c00"
    const [email, setEmail] = useState("")
    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => <>
                <form className="flex flex-col sm:flex-row justify-center px-8" onSubmit={e => { subscribe({ EMAIL: email }); e.preventDefault() }}>
                    <input type="email" required placeholder="Enter your email" onChange={e => setEmail(e.target.value)}
                        className="block sm:max-w-xs w-full px-4 py-3 text-base leading-6 appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
                    <button className="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base leading-6 font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150 hover:bg-gray-600" type="sub">
                        <span className={status === "sending" ? "opacity-0" : ""}>Sign up</span>
                        <span className={classnames("absolute inset-0 flex items-center justify-center pointer-events-none", status === "sending" ? "opacity-100" : "opacity-0")}>
                            <svg className="h-8 w-8 spin" style={{ animation: "spin 1s infinite linear" }} viewBox="0 0 24 24">
                                <path className="text-gray-600" fill="currentColor" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"></path>
                                <path className="text-gray-400" fill="currentColor" d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z"></path>
                            </svg>
                        </span>
                    </button>
                </form>
                <div className="text-center h-2 mt-4 text-white">
                    {status === "sending" && <div>Please wait...</div>}
                    {status === "error" && <div className="text-red-500" dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div>Thanks for signing up!</div>}
                </div>
            </>} />
    )
}

const Contact = () => (
    <section className="py-32 bg-blue-500">
        <div className="text-center text-white px-3 lg:px-0">
            <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight border-b-4 mx-auto border-opacity-25" style={{width:"fit-content"}}>
                Interested?
            </h1>
            <p className="leading-loose text-gray-900 text-base md:text-lg lg:text-xl mb-8">
                Are you a content creator or broadcaster, wanting a solution tailored to your needs? Or just curious to try? Let's talk about it! Sign up for our beta and we'll reach back to you as soon as possible!
            </p>
        </div>
        <SubscribeForm />
    </section>
)

export default Contact