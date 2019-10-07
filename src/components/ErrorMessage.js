import React from "react"
import { Typography } from "antd"

const { Paragraph } = Typography
const ErrorMessage = ({ errMessage }) => (
  <Paragraph className="paragraph" type="secondary">
    {errMessage}
    <span role="img" aria-label="wrong">
      ❌
    </span>
  </Paragraph>
)
export default ErrorMessage
