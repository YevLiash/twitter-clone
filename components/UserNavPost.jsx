'use client'

import {useRef, useState} from 'react'
import {LuImage} from 'react-icons/lu'
import {RiCalendarScheduleLine, RiFileGifLine} from 'react-icons/ri'
import {CiCircleList} from 'react-icons/ci'
import {BsEmojiSmile} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'

function UserNavPost() {
  const [post, setPost] = useState('')

  const imageInputRef = useRef(null)

  return (
    <div className="flex gap-3 border-b sm:border-x border-gray-700 p-4">
      <div className="min-w-10 h-10 bg-purple-900 rounded-full flex justify-center items-center ">
        <span>U</span>
      </div>
      <div className="mt-2 flex flex-col gap-8 w-full">
        <input
          value={post}
          onChange={(e) => setPost(e.target.value)}
          type="text"
          placeholder="What's happening?"
          className="block border-none outline-none"
        />
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-4">
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button onClick={() => imageInputRef.current.click()}>
                <LuImage className="text-xl" />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                className="hidden"
              />
            </li>
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><RiFileGifLine className="text-xl" /></button>
            </li>
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><CiCircleList className="text-xl" /></button>
            </li>
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><BsEmojiSmile className="text-xl" /></button>
            </li>
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><RiCalendarScheduleLine className="text-xl" /></button>
            </li>
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><GrLocation className="text-xl" /></button>
            </li>
          </ul>

          <button className={`px-4 py-1.5 font-semibold rounded-full text-gray-900 ${post === '' ? 'bg-gray-400' : 'bg-white'}`}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default UserNavPost