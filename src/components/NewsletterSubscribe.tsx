import React, { useState } from "react"
import classnames from "classnames"

import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Paragraph } from "./Text"

const NewsletterSubscribe = () => {
    const url = "https://apwine.us17.list-manage.com/subscribe/post?u=49b391a473b9f605aed855129&amp;id=2bb1b99f44"
    const [email, setEmail] = useState("")
    return <>
        <Paragraph className="text-xl mb-8">
            <b className="font-bold">Subscribe</b> to our newsletter to get the latest blog posts, token news and platform announcements straight to your inbox.
        </Paragraph>
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => <>
                <form className="flex flex-col sm:flex-row mb-4" onSubmit={e => { subscribe({ EMAIL: email }); e.preventDefault() }}>
                    <input aria-label="email" type="email" required placeholder="Enter your email" onChange={e => setEmail(e.target.value)}
                        className="block sm:max-w-xs w-full flex-1 px-4 py-3 text-base leading-6 appearance-none border border-gray-300 shadow-none bg-white rounded-full placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
                    <button className="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base leading-6 font-semibold leading-snug bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition ease-in-out duration-150" type="submit">
                        <span className={status === "sending" ? "opacity-0" : ""}>Sign up</span>
                        <span className={classnames("absolute inset-0 flex items-center justify-center pointer-events-none", status === "sending" ? "opacity-100" : "opacity-0")}>
                            <svg className="h-8 w-8 animate-spin" viewBox="0 0 24 24">
                                <path className="text-gray-600" fill="currentColor" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"></path>
                                <path className="text-gray-400" fill="currentColor" d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z"></path>
                            </svg>
                        </span>
                    </button>
                </form>
                { ["sending", "error", "success"].includes(status) ? <Paragraph className="text-left mt-8 mb-2 text-blue-500">
                    {status === "sending" && <div>Please wait...</div>}
                    {status === "error" && <div className="text-red-500" dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div>Thank you for signing up!</div>}
                </Paragraph> : null }
            </>} />
    </>
}

export default NewsletterSubscribe