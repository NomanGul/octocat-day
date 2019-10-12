import React, { useState } from "react"
import moment from "moment"
import Confetti from "react-confetti"
import { Spin } from "antd"
import { width, height } from "./utils/Dimensions"
import { usePrevious } from "./utils/usePrevious"
import { FaceBookIcon, TwitterIcon, LinkedinIcon } from "./assets/svgs"
import HomeShowcase from "./components/HomeShowcase"
import SearchForm from "./components/SearchForm"
import SocialHandler from "./components/SocialHandler"
import ErrorMessage from "./components/ErrorMessage"
import Profile from "./components/Profile"
import GithubService from "./services/Github"
import "./App.css"

const ICON_WIDTH = 30,
  ICON_HEIGHT = 30

const App = () => {
  const [{ name, date, login, avatar }, setData] = useState({
    name: "",
    date: "",
    login: "",
    avatar: ""
  })
  const [userName, setUserName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const prevUsername = usePrevious(userName)

  // for github user data fetching via github api
  const getJoiningDate = async () => {
    if (!userName || prevUsername === userName) return false
    setLoading(true)
    setError("")
    try {
      const user = await GithubService.getJoiningDateOfUser(userName)
      setData({
        name: user.name,
        date: moment(user.created_at).format("DD MMMM YYYY"),
        login: user.login,
        avatar: user.avatar_url
      })
      setUserName("")
    } catch (err) {
      setData({ name: "", date: "", login: "" })
      /**
       * @code err.message.split(":")[1] - Formatted message.
       * @description: Error constructor returns response of pattern Error: ERR_MESSAGE
       */
      setError(err.message.split(":")[1])
    } finally {
      setLoading(false)
    }
  }

  const renderProfileLink = () => {
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
          handleChange={e => setUserName(e.target.value)}
          value={userName}
          searchHandler={getJoiningDate}
        />
      </div>

      <div className="response__container row column">
        <Spin size="large" spinning={loading} />
        {!loading && date ? (
          <>
            <Profile
              renderProfileLink={renderProfileLink}
              avatar={avatar}
              date={date}
            />
            <div>
              <SocialHandler
                href={`http://www.facebook.com/sharer.php?u=http://octocatday.com&quote=I%20joined%20GitHub%20on%20${date}%20%0aFind%20yours%20at%20https://www.octocatday.com`}
              >
                <FaceBookIcon
                  className="facebookIcon"
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                />
              </SocialHandler>
              <SocialHandler
                href={`https://twitter.com/intent/tweet?text=I%20joined%20GitHub%20on%20${date}%20🎉%0aFind%20yours%20at:%20https://www.octocatday.com%20😎`}
              >
                <TwitterIcon
                  className="twitterIcon"
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                />
              </SocialHandler>
              <SocialHandler
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.octocatday.com`}
              >
                <LinkedinIcon
                  className="linkedinIcon"
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                />
              </SocialHandler>
            </div>
          </>
        ) : error ? (
          <ErrorMessage errMessage={error} />
        ) : null}
      </div>
    </div>
  )
}

export default App
