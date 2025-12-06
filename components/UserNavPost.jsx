'use client'

import {useRef, useState} from 'react'
import {LuImage} from 'react-icons/lu'
import {RiCalendarScheduleLine, RiFileGifLine} from 'react-icons/ri'
import {CiCircleList} from 'react-icons/ci'
import {BsEmojiSmile} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'
import {useMutation} from '@tanstack/react-query'
import {useUser} from '../context/UserContext'
import UserAvatar from '../components/UserAvatar'

function UserNavPost({refetchTweets}) {
  const [content, setContent] = useState('')

  const textareaRef = useRef(null)
  const handleInput = () => {
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
  }

  const {user} = useUser()

  const imageInputRef = useRef(null)

  const mutation = useMutation({
    mutationFn: async (newTweet) => {
      const res = await fetch('http://localhost:3000/api/tweets', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newTweet)
      })
      return res.json()
    },
    onSuccess: () => {
      setContent('')
      refetchTweets()
    }
  })

  async function handlePost() {
    if (!content.trim()) return
    if (!user) return

    const newTweet = {
      content,
      authorId: user._id,
      authorUsername: user.username
    }

    mutation.mutate(newTweet)
  }

  return (
    <div className="flex gap-3 border-b sm:border-x border-gray-700 p-2 sm:p-4">
      <UserAvatar />
      <div className="mt-2 flex flex-col gap-3 w-full">
        <div>
        <textarea
          rows={1}
          value={content}
          maxLength={300}
          ref={textareaRef}
          onInput={handleInput}
          placeholder="What's happening?"
          className=" w-full resize-none block border-none outline-none"
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handlePost()
            }
          }}
        />
          <div className="text-right mr-2 sm:mr-3 text-gray-400/50 text-xs">
            {content.length} / 300
          </div>
        </div>
        <div className="ml-[-55px] sm:ml-0 flex items-center justify-between">
          <ul className="flex items-center gap-1 ">
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button onClick={() => imageInputRef.current.click()}>
                <LuImage className="text-lg lg:text:xl" />
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
            <li className="hidden sm:flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><CiCircleList className="text-xl" /></button>
            </li>
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><BsEmojiSmile className="text-xl" /></button>
            </li>
            <li className="hidden sm:flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><RiCalendarScheduleLine className="text-xl" /></button>
            </li>
            <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
              <button><GrLocation className="text-xl" /></button>
            </li>
          </ul>

          <button
            disabled={content.trim() === ''}
            onClick={handlePost}
            className={`px-3 sm:px-4 py-1 sm:py-1.5 font-semibold rounded-full text-gray-900 ${content.trim() === '' ? 'bg-gray-400' : 'bg-white'} hover:bg-gray-300`}
          >Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserNavPost