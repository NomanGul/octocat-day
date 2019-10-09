import React from "react"
import { Typography } from "antd"

const { Paragraph } = Typography

type ErrorStruct = {
  errMessage: string
}

const ErrorMessage = ({ errMessage }: ErrorStruct) => (
  <Paragraph className="paragraph" type="secondary">
    {errMessage}
    <span role="img" aria-label="wrong">
      ❌
    </span>
  </Paragraph>
)
export default ErrorMessage
