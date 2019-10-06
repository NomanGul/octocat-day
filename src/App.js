import React from "react"
import moment from "moment"
import Confetti from "react-confetti"
import { Spin } from "antd"
import { width, height } from "./utils/Dimensions"
import { usePrevious } from "./utils/usePrevious"
import { FaceBookIcon, TwitterIcon } from "./assets/svgs"
import HomeShowcase from "./components/HomeShocase"
import SearchForm from "./components/SearchForm"
import SocialHandler from "./components/SocialHandler"
import ErrorMessage from "./components/ErrorMessage"
import Profile from "./components/Profile"
import "./App.css"

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

  const prevUsername = usePrevious(username)

  // for github user data fetching via github api
  const getJoiningDate = async () => {
    if (!username || prevUsername === username) return false
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
      setData({ name: "", date: "", login: "" })
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const getProfileLink = () => {
    return (
      <a
        href={`https://github.com/${login}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {name || login}
      </a>
    )
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
        <HomeShowcase />
        <SearchForm
          handleChange={e => setUsername(e.target.value)}
          value={username}
          searchHandler={getJoiningDate}
        />
      </div>

      <div className="response__container row column">
        <Spin size="large" spinning={loading} />
        {!loading && date ? (
          <>
            <Profile
              getProfileLink={getProfileLink}
              avatar={avatar}
              date={date}
            />
            <div>
              <SocialHandler
                href={`http://www.facebook.com/sharer.php?u=http://octocatday.com&quote=I%20joined%20GitHub%20on%20${date}%20%0aFind%20yours%20at%20https://www.octocatday.com`}
              >
                <FaceBookIcon />
              </SocialHandler>
              <SocialHandler
                href={`https://twitter.com/intent/tweet?text=I%20joined%20GitHub%20on%20${date}%20🎉%0aFind%20yours%20at:%20https://www.octocatday.com%20😎`}
              >
                <TwitterIcon />
              </SocialHandler>
            </div>
          </>
        ) : error ? (
          <ErrorMessage errMessage="User not Found" />
        ) : null}
      </div>
    </div>
  )
}

export default App
