import React from "react"

const BlogHero = props => (
  <div className="grid grid-rows-1 grid-cols-2">
    <div className="flex justify-center flex-col space-y-4 pr-10">
      <p className="text-white font-bold text-8xl">{props.title}</p>
      <p className="font-text text-primary-100 text-sm">{props.excerpt}</p>
      <a href={props.slug} className="inline-block text-white font-bold text-sm">
        Read more
      </a>
    </div>
    <div className="bg-primary-200 opacity-50 h-96"></div>
  </div>
)

export default BlogHero
