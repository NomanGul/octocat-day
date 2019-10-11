import React from "react"
import { Typography } from "antd"

type ProfileStruct = {
  date: string
  avatarUrl: string
  renderProfileLink: Function
}

const { Paragraph, Text } = Typography
const Profile = ({ renderProfileLink, avatarUrl, date }: ProfileStruct) => (
  <>
    <Paragraph className="paragraph" type="secondary">
      <img className="avatar-style" src={avatarUrl} alt="avatar" />
      {renderProfileLink()} joined GitHub on
    </Paragraph>
    <Text code className="date">
      {date}
    </Text>
  </>
)

export default Profile
