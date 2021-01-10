import React from "react"

const ArticleThumbnail = props => (
  <div className="flex flex-col">
    <a href={props.slug} className="space-y-4">
      <div className="bg-primary opacity-50 h-40"></div>
      <p className="text-white font-bold text-xl">{props.title}</p>
      <p className="font-text text-primary-light text-sm">
        {props.excerpt}
      </p>
      <span className="text-white font-text text-sm"> {props.date}</span>
    </a>
  </div>
)

export default ArticleThumbnail
