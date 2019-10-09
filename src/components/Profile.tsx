import React from "react"
import { Typography } from "antd"

type ProfileStruct = {
  date: string
  avatar_url: string
  renderProfileLink: Function
}

const { Paragraph, Text } = Typography
const Profile = ({ renderProfileLink, avatar_url, date }: ProfileStruct) => (
  <>
    <Paragraph className="paragraph" type="secondary">
      <img className="avatar-style" src={avatar_url} alt="avatar" />
      {renderProfileLink()} joined GitHub on
    </Paragraph>
    <Text code className="date">
      {date}
    </Text>
  </>
)

export default Profile
