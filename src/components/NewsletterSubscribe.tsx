import React, { useState } from "react"
import classnames from "classnames"

import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Paragraph } from "./Text"

const NewsletterSubscribe = () => {
    const url = "https://apwine.us17.list-manage.com/subscribe/post?u=49b391a473b9f605aed855129&amp;id=2bb1b99f44"
    const [email, setEmail] = useState("")
    return (
        <div className="flex flex-col items-center p-16 pb-8 rounded-t-xl bg-gradient-to-b from-primary-dark to-transparent max-w-3xl mx-auto">
            <span className="text-white font-bold text-4xl">Let’s keep in touch</span>
            <span className="font-text text-primary-light text-sm mt-6 max-w-md text-center">Subscribe to get the latest blog posts, news and platform announcements straight to your inbox.</span>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => <>
                    <form className="w-full flex flex-row items-center justify-center space-x-4 mt-12" onSubmit={e => { subscribe({ EMAIL: email }); e.preventDefault() }}>
                        <input aria-label="email" type="email" required placeholder="Enter your email..." onChange={e => setEmail(e.target.value)}
                            className={classnames(
                                "w-full max-w-xs px-6 py-3 text-sm bg-white rounded-xl",
                                "placeholder-gray-500"
                            )} />
                        <button className={classnames(
                            "relative",
                            "w-40",
                            "py-3 text-sm font-semibold text-white",
                            "rounded-xl",
                            "bg-gradient-to-r from-primary-dark to-primary"
                        )} type="submit">
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
        </div>
    )
}

export default NewsletterSubscribe