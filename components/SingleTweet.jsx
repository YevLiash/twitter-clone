'use client'

import {RiChat3Line, RiFileGifLine} from 'react-icons/ri'
import {LuImage, LuRepeat2} from 'react-icons/lu'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'
import {TbShare2} from 'react-icons/tb'
import {useRef, useState} from 'react'
import {BsDot, BsEmojiSmile, BsFillPatchCheckFill} from 'react-icons/bs'
import {FaArrowLeftLong} from 'react-icons/fa6'
import {IoIosMore} from 'react-icons/io'
import Link from 'next/link'
import {GrLocation} from 'react-icons/gr'
import UserAvatar from '../components/UserAvatar'
import {formatDate} from '../utils'
import {useUser} from '../context/UserContext'

function SingleTweet({tweet}) {
  const [isLiked, setIsLiked] = useState(false)
  const [showReplyIcons, setShowReplyIcons] = useState(false)
  const [reply, setReply] = useState('')

  const imageInputRef = useRef(null)

  const {user} = useUser()

  return (
    <div className="p-2 sm:p-4 border-b sm:border-x  border-gray-700 flex gap-1.5 sm:gap-3 lg:border-x lg:border-b flex-col ">
      <div>
        <Link
          href={'/'}
          className="flex gap-8 items-center"
        >
          <FaArrowLeftLong />
          <span className="font-bold text-lg">Post</span>
        </Link>
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
          {user._id !== tweet.author.id &&
            <button className="px-4 py-1.5 font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-300">Subscribe</button>}

          <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
            <IoIosMore className="text-xl" />
          </div>
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

      <ul className="py-1 flex justify-between items-center text-gray-500 border-b border-b-gray-700 border-t border-t-gray-700">
        <li className="pointer hover:text-sky-400 transition">
          <button
            className="flex items-center gap-1 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('reply button clicked')
            }}
          >
            <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
              <RiChat3Line className="text-xl " />
            </div>
            <span className="text-sm ml-[-4px]">{tweet.reply}</span>
          </button>
        </li>

        <li className="pointer hover:text-green-500 transition">
          <button
            className="flex items-center gap-1 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('repost button clicked')
            }}
          >
            <div className="p-2.5 rounded-full group-hover:bg-green-500/10 transition">
              <LuRepeat2 className="text-xl" />
            </div>
            <span className="text-sm ml-[-4px]">{tweet.repost}</span>
          </button>
        </li>

        <li className="pointer hover:text-pink-500 transition">
          <button
            className="flex items-center group cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
          >
            <div className="p-2.5 rounded-full group-hover:bg-pink-500/10  transition">
              {isLiked ? <AiFillHeart className="text-xl" /> :
                <AiOutlineHeart className="text-xl" />}
            </div>
            <span className="text-sm ml-[-4px]">{tweet.reactions?.likes}</span>
          </button>
        </li>

        <li className="pointer">
          <button className="flex items-center cursor-pointer">
            <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
              <FiBookmark className="text-xl" />
            </div>
          </button>
        </li>
        <li className="pointer">
          <button className="flex items-center cursor-pointer">
            <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
              <TbShare2 className="text-xl" />
            </div>
          </button>
        </li>
      </ul>

      <div>
        <div className="flex justify-between">
          <div className="flex sm:gap-3">
            <UserAvatar />
            <div className="flex flex-col gap-4  ">
              <input
                type="text"
                value={reply}
                onChange={e => setReply(e.target.value)}
                onFocus={() => setShowReplyIcons(true)}
                onBlur={() => setShowReplyIcons(false)}
                placeholder="Post your reply"
                className="block border-none outline-none ml-2 mt-2"
              />
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
            </div>
          </div>

          <button className={`h-fit mt-auto px-4 py-1.5 font-semibold rounded-full text-gray-900 ${reply === '' ? 'bg-gray-400' : 'bg-white'}`}>Reply</button>
        </div>
      </div>
    </div>
  )
}

export default SingleTweet