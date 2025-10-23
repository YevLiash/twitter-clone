'use client'

import {IoIosSearch} from 'react-icons/io'
import {useState} from 'react'

function Search() {
  const [searchValue, setSearchValue] = useState('')
  // console.log(searchValue)

  return (
    <div className="flex gap-2 items-center border border-gray-700 px-4 py-2 rounded-full">
      <IoIosSearch />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className="border-none outline-none"
      />
    </div>
  )
}

export default Search