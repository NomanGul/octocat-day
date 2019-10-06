import React from "react"
import { Input } from "antd"

const { Search } = Input
const SearchForm = ({ handleChange, value, searchHandler }) => (
  <div className="search_container">
    <Search
      type="text"
      addonBefore="@"
      onChange={handleChange}
      value={value}
      placeholder="GitHub handle"
      onSearch={searchHandler}
      className="search"
    />
  </div>
)

export default SearchForm
