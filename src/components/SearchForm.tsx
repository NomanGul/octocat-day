import React from "react"
import { Input } from "antd"

type SearchStruct = {
  value: string
  handleChange: any
  searchHandler: any
}

const { Search } = Input
const SearchForm = ({ handleChange, value, searchHandler }: SearchStruct) => (
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
