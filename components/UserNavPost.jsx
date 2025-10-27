'use client'

import {useState} from 'react'

function UserNavPost() {
  const [post, setPost] = useState('')

  return (
    <div className="flex gap-3 border-b border-b-gray-700 p-4">
      <div className="w-8 h-8 bg-purple-900 rounded-full flex justify-center items-center ">
        <span>U</span>
      </div>
      <div className="mt-2 flex flex-col gap-2 w-full">
        <input
          value={post}
          onChange={(e) => setPost(e.target.value)}
          type="text"
          placeholder="What's happening?"
          className="block border-none outline-none"
        />
        <div className="ml-auto">
          <button className={` px-4 py-1.5 font-semibold rounded-full ${post === '' ? 'text-gray-700 bg-gray-400' : 'text-gray-900 bg-white'}  `}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default UserNavPost