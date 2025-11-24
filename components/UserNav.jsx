'use client'

import {useState} from 'react'

function UserNav() {
  const [active, setActive] = useState('for-you')

  return (
    <div className="flex border-b sm:border-x border-gray-700">
      <div className="w-1/2 flex justify-center">
        <button
          onClick={() => setActive('for-you')}
          className={`w-1/2 py-2 sm:py-3 border-b-3  hover:bg-gray-600 ${active === 'for-you' ? 'border-b-blue-500' : 'border-transparent'}`}
        >
          <h2>For You</h2>
        </button>
      </div>

      <div className="w-1/2 flex justify-center">
        <button
          onClick={() => setActive('following')}
          className={`w-1/2 py-2 sm:py-3 border-b-3  hover:bg-gray-600 ${active === 'following' ? 'border-b-blue-500' : 'border-transparent'}`}
        >
          <h2>Following</h2>
        </button>
      </div>
    </div>
  )
}

export default UserNav