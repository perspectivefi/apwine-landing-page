import React from "react"

export default () => {
    if (typeof window !== "undefined") {
        window.location.assign("/")
    }
    return null
}