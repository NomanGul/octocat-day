import React from "react"
import { Input, Spin, Typography } from "antd"
import moment from "moment"
import "./App.css"
import Confetti from "react-confetti"
import { width, height } from "./utils/Dimensions"

const { Search } = Input
const { Text, Paragraph, Title } = Typography

const App = () => {
  const [{ name, date, login, avatar }, setData] = React.useState({
      name: "",
      date: "",
      login: "",
      avatar: ""
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
        login: data.login,
        avatar: data.avatar_url
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

  const getProfileLink = ()=>{
      return <a href={`https://github.com/${login}`} rel="noopener noreferrer" target="_blank" >{name || login}</a>;
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
              <img className="avatar-style" src={avatar} alt="avatar" />
              {getProfileLink()} joined GitHub on
            </Paragraph>
            <Text code className="date">
              {date}
            </Text>
            <div>
              <a
                style={{ marginRight: 10 }}
                href={`http://www.facebook.com/sharer.php?u=http://octocatday.com&quote=I%20joined%20GitHub%20on%20${date}%20%0aFind%20yours%20at%20https://www.octocatday.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  style={{ marginTop: 20 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    style={{ fill: "#3b5998" }}
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                  />
                </svg>
              </a>

              <a
                style={{ marginLeft: 5 }}
                href={`https://twitter.com/intent/tweet?text=I%20joined%20GitHub%20on%20${date}%20🎉%0aFind%20yours%20at:%20https://www.octocatday.com%20😎`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  style={{ marginTop: 5 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    style={{ fill: "#00acee" }}
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
                  />
                </svg>
              </a>
            </div>
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
