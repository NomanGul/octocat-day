import React from "react"
import { Input } from "antd"

type SearchStruct = {
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler: (value: string, e?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void;
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
