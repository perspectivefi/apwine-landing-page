import React, { FunctionComponent } from "react"
import classnames from "classnames"

const Container: FunctionComponent<{ className?: string }> = ({ className, children }) => (
    <section className={classnames(
        "max-w-xl mx-auto p-8 m-8",
        className
    )}>
        { children }
    </section>
)

export default Container