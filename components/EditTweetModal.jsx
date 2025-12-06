'use client'

import {useEffect, useRef, useState} from 'react'
import {LuImage} from 'react-icons/lu'
import {RiCalendarScheduleLine, RiFileGifLine} from 'react-icons/ri'
import {CiCircleList} from 'react-icons/ci'
import {BsEmojiSmile} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'
import UserAvatar from '../components/UserAvatar'

function EditTweetModal({tweet, setShowEditModal, onEdit}) {
  const [content, setContent] = useState(tweet.content || '')

  const modalEitRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalEitRef.current && !modalEitRef.current.contains(event.target)) {
        setShowEditModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setShowEditModal])

  const textareaRef = useRef(null)
  const handleInput = () => {
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
  }

  const imageInputRef = useRef(null)

  function handleSave() {
    if (!content.trim()) return
    console.log('Tweet has edited')
  }

  return (
    <div
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowEditModal(false)
      }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div
        ref={modalEitRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-black border border-gray-700 w-[90%] sm:w-[500px] rounded-2xl p-3 sm:p-5 flex flex-col gap-5 animate-fadeIn"
      >
        <div className="relative flex flex-col items center justfy-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setShowEditModal(false)
            }}
            className="absolute top-[-8px] right-[-8px] text-gray-400 hover:text-white text-md px-2"
          >
            ✕
          </button>
          <span className="mx-auto text-center w-[75%] font-semibold text-lg">Edit Tweet</span>
        </div>

        <div className="flex gap-3">
          <UserAvatar />

          <textarea
            rows={1}
            ref={textareaRef}
            onInput={handleInput}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
            }}

            placeholder="Edit your tweet..."
            className="resize-none block border-none outline-none bg-transparent w-full"
          />
        </div>

        <div className="sm:ml-0 flex items-center justify-between">
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
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onEdit(tweet._id, content)
              setShowEditModal(false)
            }}
            className={`px-3 sm:px-4 py-1 sm:py-1.5 font-semibold rounded-full text-gray-900 ${content.trim() === '' ? 'bg-gray-400' : 'bg-white'} hover:bg-gray-300`}
          >Edit
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default EditTweetModal