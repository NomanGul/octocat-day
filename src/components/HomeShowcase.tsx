import React from "react"
import { Typography } from "antd"

const { Text, Title } = Typography

const HomeShowcase = () => {
  return (
    <>
      <Title className="header_container">
        <span className="header">Octocat Day</span>
        <span role="img" aria-label="man_technologist">
          👨‍💻
        </span>
      </Title>
      <Text className="sub_header">
        GitHub user join date
        <span role="img" aria-label="smiley">
          😃
        </span>
      </Text>
    </>
  )
}

export default HomeShowcase
