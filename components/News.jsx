'use client'

import {useState} from 'react'
import {IoCloseOutline} from 'react-icons/io5'

function News() {
  const [showNews, setShowNews] = useState(true)

  return (
    showNews &&
    <div className="border border-gray-700 rounded-2xl p-3">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-xl">Today’s News</h2>
        <button
          onClick={() => setShowNews(false)}
          className="bg-transparent p-1 rounded-full hover:bg-gray-400 "
        >
          <IoCloseOutline className="text-xl" /></button>
      </div>
      <ul className="flex flex-col gap-3">
        <li>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </li>
      </ul>
    </div>
  )
}

export default News