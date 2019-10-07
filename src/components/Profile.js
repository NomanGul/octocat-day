import React from "react"
import { Typography } from "antd"

const { Paragraph, Text } = Typography
const Profile = ({ renderProfileLink, avatar, date }) => (
  <>
    <Paragraph className="paragraph" type="secondary">
      <img className="avatar-style" src={avatar} alt="avatar" />
      {renderProfileLink()} joined GitHub on
    </Paragraph>
    <Text code className="date">
      {date}
    </Text>
  </>
)

export default Profile
