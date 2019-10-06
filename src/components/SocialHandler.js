import React from "react"

const SocialHandler = ({ children, href }) => {
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
