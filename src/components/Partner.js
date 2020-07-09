import React, { useState } from "react"

import MailchimpSubscribe from "react-mailchimp-subscribe"

import classNames from "classnames"

const Tab = ({ label, selected, onClick }) => (
    <div className={classNames(
            "w-1/3 pb-2",
            selected && "border-b-4 border-orange-500"
        )}
        onClick={onClick}>
        <button>{ label }</button>
    </div>
)

const TabContent = ({ title, children }) => (
    <div className="px-8 mb-8 lg:mb-0 max-w-md mx-auto">
        { children }
    </div>
)

const ContactForm = () => {
    const [text, setText] = useState("")
    const mailUrl = `mailto:contact@ubeeq.io?subject=${encodeURIComponent("Contact Musée")}&body=${encodeURIComponent(text)}`
    return (
        <form className="mt-4 mx-auto">
            <div className="flex items-center border-b border-b-2 border-orange-500 py-2">
                <textarea onChange={e => setText(e.target.value)} value={text} className="appearance-none h-24 resize-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Bonjour, j'aimerais utiliser votre application pour proposer des visites guidées dans notre musée." aria-label="Full name" />
                <a
                    href={mailUrl}
                    className="self-end flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Contact
                </a>
            </div>
        </form>
    )
}

const SubscribeForm = () => {
    const url = "//ubeeq.us10.list-manage.com/subscribe/post?u=1113a854ad3680e2dd8ce1e12&amp;id=ffb9b67363"
    const [email, setEmail] = useState("")
    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <form className="mt-4 mx-auto" onSubmit={e => { subscribe({ EMAIL: email }); e.preventDefault() }}>
                    <div className="flex items-center border-b border-b-2 border-orange-500 py-2">
                        <input value={email} onChange={e => setEmail(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="e-mail@gmail.com" aria-label="Full name" />
                        <button className="flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                            Inscription
                        </button>
                    </div>
                    {status === "sending" && <div className="text-orange-500 mt-4">Veuillez patienter...</div>}
                    {status === "error" && <div className="text-red-500 mt-4" dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div className="text-green-500 mt-4">Merci de votre inscription !</div>}
                </form>
            )} />
    )
}

const Partner = () => {

    const [tabIndex, setTabIndex] = useState(0)

    const tabs = [
        { label: "Musées", content: (
            <>
                <p className="text-black-500 leading-relaxed">
                Proposez une nouvelle expérience utilisateur à vos visiteurs ! Contactez-nous via le formulaire suivant et nous reviendrons vers vous au plus vite, pour vous proposer une solution adaptée à vos besoins.
                </p>
                <ContactForm />
            </>
        ) },
        { label: "Boutiques", content: (
            <>
                <p className="text-black-500 leading-relaxed">
                    Nous préparons l'ouverture des inscriptions aux boutiques. Inscrivez-vous à notre newsletter pour être les premiers avertis !
                </p>
                <SubscribeForm />
            </>
        ) },
        { label: "Guides privés", content: (
            <>
                <p className="text-black-500 leading-relaxed">
                    Nous préparons l'ouverture des inscriptions aux guides privés. Inscrivez-vous à notre newsletter pour être les premiers avertis !
                </p>
                <SubscribeForm />
            </>
        ) }
    ]

    const tab = tabs[tabIndex]

    return (
        <section className="py-12 px-8 md:px-32">

            <h2 className="text-3xl mb-8 text-center font-heading">Devenir partenaire</h2>

            <div className="flex max-w-sm mb-10 mx-auto text-center border-b-2">
                { tabs.map((tab, i) => (
                    <Tab label={tab.label} onClick={() => setTabIndex(i)} selected={tabIndex === i} />
                )) }
            </div>

            <div className="">
                <TabContent title={tab.title}>{ tab.content }</TabContent>
            </div>

        </section>
    )
}

export default Partner