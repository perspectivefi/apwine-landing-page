import React from "react"
import styled, { keyframes } from "styled-components"
import classnames from "classnames"

const N_BUBBLES = 30
const BUBBLES = Array.from(Array(N_BUBBLES).keys()).map(i => {
    const Bubble = styled.div`
        background-color: rgba(255, 255, 255, 0.4);
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;

        opacity: ${Math.random() * 100 * 0.01};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: ${keyframes`
            ${Math.random() * 30 + 30}% {
                transform:
                    translate(${Math.random() * 100 - 100}vw, ${Math.random() * 100 - 100}vh)
                    scale(${(Math.random() * 200 + 200) * 0.01});
            }
        `} ${30 + i * 0.02}s infinite;
        transform:
            translate(0, 0)
            scale(${ (Math.random() * 200 + 5) * 0.01 });
    `
    return <Bubble />
})

const Bubbles = () => (
    <div className={classnames(
        "absolute overflow-hidden",
        "w-full h-full"
    )}>
        { BUBBLES }
    </div>
)

export default React.memo(Bubbles)