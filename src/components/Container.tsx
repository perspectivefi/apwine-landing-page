import React, { FunctionComponent } from "react"
import classnames from "classnames"

const Container: FunctionComponent<{ className?: string }> = ({ className, children }) => (
    <section className={classnames(
        "max-w-5xl mx-auto lg:px-0 px-4",
        className
    )}>
        { children }
    </section>
)

export default Container