import React from "react"
import { Input, Spin, Typography } from "antd"
import moment from "moment"
import "./App.css"
import Confetti from "react-confetti"
import { width, height } from "./utils/Dimensions"

const { Search } = Input
const { Text, Paragraph, Title } = Typography

const App = () => {
  const [{ name, date, login }, setData] = React.useState({
      name: "",
      date: "",
      login: ""
    }),
    [username, setUsername] = React.useState(""),
    [loading, setLoading] = React.useState(false),
    [error, setError] = React.useState(false)

  // for github user data fetching via github api
  const getJoiningDate = async () => {
    if (!username) return false
    setLoading(true)
    setError(false)
    try {
      const req = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          "User-Agent": "Octocat-Day"
        }
      })
      if (req.status !== 200) throw Error
      const data = await req.json()
      setData({
        name: data.name,
        date: moment(data.created_at).format("DD MMMM YYYY"),
        login: data.login
      })
      setUsername("")
    } catch (error) {
      console.log("TCL: getJoiningDate -> error", error.message)
      setData({ name: "", date: "", login: "" })
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      {!loading && date ? (
        <Confetti
          recycle={false}
          width={width}
          height={height}
          numberOfPieces={300}
        />
      ) : null}
      <div className="row column">
        <Title className="header_container">
          <span className="header">Octocat Day</span>
          <span role="img" aria-label="man technologist">
            {" "}
            👨‍💻
          </span>
        </Title>
        <Text className="sub_header">(GitHub user join date 😃)</Text>

        <Search
          type="text"
          addonBefore="@"
          onChange={e => {
            setUsername(e.target.value)
          }}
          value={username}
          placeholder="GitHub handle"
          onSearch={getJoiningDate}
          className="search"
        />
      </div>

      <div className="response__container row column">
        <Spin size="large" spinning={loading} />
        {!loading && date ? (
          <>
            <Paragraph className="paragraph" type="secondary">
              <span role="img" aria-label="Tada">
                🎉
              </span>{" "}
              {name || login} joined GitHub on
            </Paragraph>
            <Text code className="date">
              {date}
            </Text>
          </>
        ) : error ? (
          <Paragraph className="paragraph" type="secondary">
            User not Found{" "}
            <span role="img" aria-label="wrong">
              ❌
            </span>
          </Paragraph>
        ) : null}
      </div>
    </div>
  )
}

export default App
