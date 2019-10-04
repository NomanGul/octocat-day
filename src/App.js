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
          <span role="img" aria-label="man_technologist">
            {" "}
            👨‍💻
          </span>
        </Title>
        <Text className="sub_header">
          (GitHub user join date
          <span role="img" aria-label="smiley">
            {" "}
            😃
          </span>
          )
        </Text>

        <div className="search_container">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" />
              </svg>
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
