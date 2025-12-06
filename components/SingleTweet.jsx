'use client'

import {useRef, useState} from 'react'
import {BsDot, BsEmojiSmile, BsFillPatchCheckFill} from 'react-icons/bs'
import {FaArrowLeftLong} from 'react-icons/fa6'
import UserAvatar from '../components/UserAvatar'
import {formatDate} from '../utils'
import {useUser} from '../context/UserContext'
import TweetActions from '../components/TweetActions'
import TweetMenu from '../components/TweetMenu'
import {LuImage} from 'react-icons/lu'
import {RiFileGifLine} from 'react-icons/ri'
import {GrLocation} from 'react-icons/gr'
import {useRouter} from 'next/navigation'

function SingleTweet({tweet}) {
  const [isLiked, setIsLiked] = useState(false)
  const [showReplyIcons, setShowReplyIcons] = useState(false)
  const [reply, setReply] = useState('')

  const router = useRouter()
  const imageInputRef = useRef(null)

  const textareaRef = useRef(null)
  const handleInput = () => {
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
  }

  const {user} = useUser()

  return (
    <div className="p-2 sm:p-4 border-b sm:border-x  border-gray-700 flex gap-1.5 sm:gap-3 lg:border-x lg:border-b flex-col ">
      <div>
        <button
          onClick={() => {
            router.push('/')
          }}
          className="cursor-pointer flex gap-8 items-center"
        >
          <FaArrowLeftLong />
          <span className="font-bold text-lg">Posts</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2  items-center">
          <UserAvatar />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-white">{tweet.author?.username}</span>
              <BsFillPatchCheckFill className="text-blue-500" />
            </div>
            <p className="text-gray-400">@{tweet.author?.username}</p>
          </div>
        </div>

        <div className="flex  gap-2 items-center">
          {user._id !== tweet.author.id ?
            (
              <button className="px-4 py-1.5 font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-300">Subscribe</button>)
            :
            (<TweetMenu
              tweet={tweet}
            />)}
        </div>
      </div>


      <div>
        <p>{tweet.content}</p>
      </div>

      <div className="text-gray-500 flex gap-1 items-center">
        <p>{formatDate(tweet.createdAt).time}
          <BsDot className="text-sm inline" />
          {formatDate(tweet.createdAt).dayMonthYear}{
            <BsDot className="text-sm inline" />}
          <span className="text-white font-bold">{tweet.views}</span> Views
        </p>
      </div>

      <TweetActions tweet={tweet} />

      <div>
        <div className="">
          <div className="flex sm:gap-3">
            <UserAvatar />
            <div className="flex flex-col gap-4  ">
              <textarea
                rows={1}
                ref={textareaRef}
                onInput={handleInput}
                value={reply}
                onChange={e => setReply(e.target.value)}
                onFocus={() => setShowReplyIcons(true)}
                onBlur={() => setShowReplyIcons(false)}
                placeholder="Post your reply"
                className="resize-none block w-auto border-none outline-none ml-2 mt-2"
              />

            </div>
          </div>
          <div className="flex items-center justify-between">
            {showReplyIcons && <ul className="flex items-center gap sm:gap-4">
              <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
                <button onClick={() => imageInputRef.current.click()}>
                  <LuImage className="text-lg" />
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={imageInputRef}
                  className="hidden"
                />
              </li>
              <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
                <button><RiFileGifLine className="text-lg" /></button>
              </li>
              <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
                <button><BsEmojiSmile className="text-lg" /></button>
              </li>
              <li className="flex items-center justify-between text-blue-500 px-2 py-2 rounded-full hover:bg-blue-500/10">
                <button><GrLocation className="text-lg" /></button>
              </li>
            </ul>}
            <button className={`h-fit ml-auto px-3 sm:px-4 py-1 sm:py-1.5 font-semibold rounded-full text-gray-900 ${reply === '' ? 'bg-gray-400' : 'bg-white mt-0'} ${showReplyIcons ? 'mt-0' : 'mt-[-40px]'} hover:bg-gray-300`}>Reply</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTweet