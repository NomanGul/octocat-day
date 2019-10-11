import React from "react"

type SocialHandlerStruct = {
  href: string
  children: React.ReactNode
}

const SocialHandler = ({ children, href }: SocialHandlerStruct) => {
  return (
    <a
      style={{ marginRight: 10 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default SocialHandler
