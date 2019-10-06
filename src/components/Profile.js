import React from "react"
import { Typography } from "antd"

const { Paragraph, Text } = Typography
const Profile = ({ getProfileLink, avatar, date }) => (
  <>
    <Paragraph className="paragraph" type="secondary">
      <img className="avatar-style" src={avatar} alt="avatar" />
      {getProfileLink()} joined GitHub on
    </Paragraph>
    <Text code className="date">
      {date}
    </Text>
  </>
)

export default Profile
