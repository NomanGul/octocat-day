import React from "react"
import { Input, Spin, Typography, Row, Col, Avatar } from "antd"
import moment from "moment"
import "./App.css"
import Confetti from "react-confetti"
import { width, height } from "./utils/Dimensions"
import notFound from './vectors/flamenco-no-comments.png';

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
      console.log(data)
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
          <center>
              <Row>
                <Col sm={6}>
                  <center>
                    <Avatar src={avatar} size={60} style={{marginBottom: 15}} />
                  </center>
                </Col>
                <Col sm={12}>
                  <Paragraph className="paragraph" type="secondary">
                    {getProfileLink()} joined GitHub on
                  </Paragraph>
                </Col>
              </Row>
              
                <Text code className="date">
                  {date}
                </Text>
                </center>
            <div>
              <a
                style={{ marginRight: 10 }}
                href={`http://www.facebook.com/sharer.php?u=http://octocatday.com&quote=I%20joined%20GitHub%20on%20${date}%20%0aFind%20yours%20at%20https://www.octocatday.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50"><path fill="#ee3e54" d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"/><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"/><path fill="#fce0a2" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"/><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"/><path fill="#ee3e54" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"/><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"/><path fill="#ee3e54" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"/><path fill="#fff" d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"/><path fill="#f1bc19" d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"/><path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"/><g><path fill="#78a2d2" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"/></g><g><path fill="#472b29" d="M68.164,59.445c-0.073,0-0.148-0.017-0.219-0.051c-0.248-0.121-0.351-0.42-0.23-0.668 c0.132-0.271,0.256-0.543,0.375-0.818c0.46-1.068,0.826-2.186,1.087-3.318c0.062-0.27,0.333-0.437,0.6-0.375 c0.269,0.063,0.437,0.331,0.375,0.6c-0.275,1.191-0.66,2.366-1.144,3.49c-0.125,0.289-0.256,0.575-0.395,0.859 C68.527,59.342,68.349,59.445,68.164,59.445z"/></g><g><path fill="#472b29" d="M70.264,52.336c-0.015,0-0.03-0.001-0.045-0.002c-0.275-0.024-0.478-0.268-0.453-0.543 c0.039-0.429,0.063-0.857,0.074-1.286c0.067-2.666-0.39-5.273-1.358-7.752c-0.101-0.257,0.027-0.547,0.284-0.647 c0.259-0.104,0.547,0.025,0.648,0.284c1.017,2.602,1.497,5.341,1.426,8.14c-0.011,0.451-0.037,0.901-0.078,1.352 C70.738,52.141,70.52,52.336,70.264,52.336z"/></g><g><path fill="#472b29" d="M35.107,36.532c-0.123,0-0.245-0.045-0.341-0.135c-0.202-0.188-0.212-0.505-0.024-0.706 c3.399-3.642,7.999-5.94,12.95-6.475c0.277-0.023,0.521,0.17,0.551,0.443c0.03,0.274-0.169,0.521-0.443,0.551 c-4.713,0.509-9.091,2.697-12.327,6.162C35.375,36.479,35.241,36.532,35.107,36.532z"/></g><g><path fill="#472b29" d="M36.138,65.284c-0.123,0-0.245-0.045-0.341-0.135c-7.104-6.632-8.721-17.138-3.934-25.548 c0.137-0.242,0.442-0.325,0.682-0.188c0.24,0.137,0.324,0.442,0.187,0.682c-4.557,8.006-3.016,18.008,3.748,24.323 c0.202,0.188,0.212,0.505,0.024,0.706C36.405,65.23,36.271,65.284,36.138,65.284z"/></g><g><path fill="#472b29" d="M58.889,68.769c-0.186,0-0.365-0.104-0.451-0.283c-0.12-0.248-0.016-0.547,0.233-0.667 c2.202-1.062,4.172-2.515,5.856-4.316c0.679-0.729,1.307-1.511,1.866-2.325c0.156-0.227,0.469-0.285,0.695-0.129 c0.228,0.156,0.286,0.467,0.129,0.695c-0.587,0.855-1.246,1.677-1.959,2.44c-1.769,1.894-3.838,3.42-6.152,4.535 C59.036,68.753,58.962,68.769,58.889,68.769z"/></g><g><path fill="#fff" d="M46.458,73.5v-17h-6.021v-5.978h6.021l0-6.216c-0.137-5.577,4.159-11.002,14.104-7.994l-0.021,5.271 l-3.508-0.022c-2.699,0-3.628,0.863-3.628,2.745v6.216h7.157L59.304,56.5h-5.899v17"/><path fill="#472b29" d="M53.905,73.5h-1V56h5.993l1.048-4.978h-7.041v-6.716c0-2.244,1.273-3.245,4.128-3.245l3.01,0.019 l0.018-4.394c-4.274-1.22-7.779-0.913-10.154,0.896c-1.942,1.479-3.018,3.926-2.949,6.712v6.729h-6.021V56h6.021v17.5h-1V57h-6.021 v-6.978h6.021v-5.716c-0.076-3.099,1.142-5.845,3.343-7.521c1.888-1.438,5.398-2.768,11.406-0.952l0.357,0.107l-0.024,6.145 l-4.009-0.024c-2.614,0-3.125,0.823-3.125,2.245v5.716h7.273L59.71,57h-5.805V73.5z"/></g><g><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"/></g></svg>
                
              </a>

              <a
                style={{ marginLeft: 5 }}
                href={`https://twitter.com/intent/tweet?text=I%20joined%20GitHub%20on%20${date}%20🎉%0aFind%20yours%20at:%20https://www.octocatday.com%20😎`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                  <path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"/>
                  <path fill="#e6edb7" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"/>
                  <path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"/>
                  <path fill="#88ae45" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"/>
                  <path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"/>
                  <path fill="#88ae45" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"/>
                  <path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"/>
                  <path fill="#73b2e5" d="M35,72.3c-4,0-7.3-3.3-7.3-7.3V35c0-4,3.3-7.3,7.3-7.3h30c4,0,7.3,3.3,7.3,7.3v30c0,4-3.3,7.3-7.3,7.3H35z"/>
                  <path fill="#472b29" d="M65,28.4c3.6,0,6.6,3,6.6,6.6v30c0,3.6-3,6.6-6.6,6.6H35c-3.6,0-6.6-3-6.6-6.6V35c0-3.6,3-6.6,6.6-6.6H65 M65,27H35c-4.4,0-8,3.6-8,8v30c0,4.4,3.6,8,8,8h30c4.4,0,8-3.6,8-8V35C73,30.6,69.4,27,65,27L65,27z"/>
                  <path fill="#fdfcee" d="M68.5,47.9v1.8V64c0,2.5-2,4.5-4.5,4.5H36c-2.5,0-4.5-2-4.5-4.5V36c0-2.5,2-4.5,4.5-4.5h25.4H64 c2.5,0,4.5,2,4.5,4.5v3.4v2v1v1.1v2.9V47.9"/>
                  <path fill="#472b29" d="M68.5 47.4c-.3 0-.5-.2-.5-.5V43c0-.3.2-.5.5-.5S69 42.7 69 43v3.9C69 47.2 68.8 47.4 68.5 47.4zM68.5 40.5c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5S69 37.7 69 38v2C69 40.3 68.8 40.5 68.5 40.5z"/><path fill="#472b29" d="M64,69H36c-2.8,0-5-2.2-5-5V36c0-2.8,2.2-5,5-5h25.4c0.3,0,0.5,0.2,0.5,0.5S61.7,32,61.4,32H36 c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V49.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V64C69,66.8,66.8,69,64,69z"/><g>
                  <path fill="#268bef" d="M61.9,42.8c-0.9,0.4-1.9,0.7-2.9,0.8c1-0.6,1.8-1.6,2.2-2.8c-1,0.6-2,1-3.2,1.2c-0.9-1-2.2-1.6-3.7-1.6 c-2.8,0-5,2.3-5,5.1c0,0.4,0,0.8,0.1,1.2c-4.2-0.2-7.8-2.2-10.3-5.3c-0.4,0.8-0.7,1.6-0.7,2.6c0,1.8,0.9,3.3,2.2,4.3 c-0.8,0-1.6-0.3-2.3-0.6c0,0,0,0,0,0.1c0,2.5,1.7,4.5,4,5c-0.4,0.1-0.9,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.5,3.5,4.7,3.5 c-1.7,1.4-3.9,2.2-6.2,2.2c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.3,7.7,2.3c9.2,0,14.2-7.8,14.2-14.5c0-0.2,0-0.4,0-0.7 C60.4,44.7,61.3,43.8,61.9,42.8z"/><path fill="#472b29" d="M45.2,61.1c-2.8,0-5.6-0.8-7.9-2.4c-0.2-0.1-0.3-0.4-0.2-0.6c0.1-0.2,0.3-0.4,0.5-0.3c2.2,0.3,4.2-0.2,6-1.3 c-1.8-0.5-3.3-1.9-3.8-3.7c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.3-0.2,0.5-0.2c0,0,0,0,0,0c-1.4-1-2.4-2.7-2.4-4.6 c0-0.2,0.1-0.4,0.2-0.5c0.2-0.1,0.3-0.1,0.5,0c0.1,0.1,0.3,0.1,0.4,0.2c-0.7-1-1.1-2.1-1.1-3.4c0-1,0.3-2,0.7-2.8 c0.1-0.1,0.2-0.2,0.4-0.3c0.2,0,0.3,0.1,0.4,0.2c2.3,2.9,5.7,4.8,9.3,5.1c0-0.2,0-0.4,0-0.6c0-3.1,2.5-5.6,5.5-5.6 c1.4,0,2.8,0.6,3.8,1.6c1-0.2,1.9-0.6,2.8-1.1c0.2-0.1,0.4-0.1,0.6,0c0.2,0.1,0.2,0.3,0.2,0.5c-0.2,0.7-0.5,1.3-0.9,1.8 c0.3-0.1,0.6-0.2,0.9-0.4c0.2-0.1,0.4,0,0.6,0.1c0.1,0.2,0.2,0.4,0,0.6c-0.7,1-1.5,1.9-2.4,2.6c0,0.1,0,0.3,0,0.4 C60,53.5,54.4,61.1,45.2,61.1z M39.6,58.9c1.8,0.8,3.7,1.3,5.7,1.3c8.6,0,13.7-7.1,13.7-14c0-0.2,0-0.4,0-0.6 c0-0.2,0.1-0.3,0.2-0.4c0.5-0.4,0.9-0.8,1.3-1.2c-0.4,0.1-0.9,0.2-1.4,0.3c-0.2,0-0.5-0.1-0.5-0.3c-0.1-0.2,0-0.5,0.2-0.6 c0.5-0.3,1-0.8,1.4-1.3c-0.6,0.3-1.3,0.5-2,0.6c-0.2,0-0.3,0-0.5-0.2c-0.8-0.9-2-1.5-3.3-1.5c-2.5,0-4.5,2.1-4.5,4.6 c0,0.4,0,0.7,0.1,1.1c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-3.9-0.2-7.6-2-10.2-4.9c-0.2,0.5-0.3,1.1-0.3,1.7 c0,1.5,0.8,3,2,3.8c0.2,0.1,0.3,0.4,0.2,0.6c-0.1,0.2-0.3,0.4-0.5,0.3c-0.6,0-1.1-0.1-1.7-0.3c0.3,1.9,1.7,3.4,3.5,3.8 c0.2,0,0.4,0.2,0.4,0.5c0,0.2-0.1,0.4-0.4,0.5c-0.5,0.1-1.1,0.2-1.6,0.2c0.8,1.5,2.2,2.4,3.9,2.5c0.2,0,0.4,0.1,0.5,0.3 s0,0.4-0.2,0.6C43.6,57.9,41.6,58.7,39.6,58.9z"/></g>
                </svg>
              </a>
            </div>
          </>
        ) : error ? (
          <div>
            <center>
              <img src={notFound} style={{width: 100, height: 100, marginBottom: 10}} alt='' />
            </center>
          <Paragraph className="paragraph" type="secondary">
            User not Found{" "}
            <span role="img" aria-label="wrong">
              ❌
            </span>
          </Paragraph>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
