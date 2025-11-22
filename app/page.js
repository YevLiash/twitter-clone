'use client'

import UserNav from '../components/UserNav'
import UserNavPost from '../components/UserNavPost'
import TweetsList from '../components/TweetsList'
import Link from 'next/link'
import {useUser} from '../context/UserContext'
import {useQuery} from '@tanstack/react-query'

async function getTweets() {
  const res = await fetch('http://localhost:3000/api/tweets', {
    method: 'GET',
    cache: 'no-store'
  })
  return res.json()
}

function Home() {
  const {user, loading} = useUser()

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['tweets'],
    queryFn: getTweets,
    enabled: !!user
  })

  if (loading) {
    return <div>Loading...</div>
  }


  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-5xl font-bold mb-5">Welcome to X-Clone</h1>
        <p className="text-2xl mb-5 ">Do you have an account?</p>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="text-gray-900 bg-gray-200 hover:bg-gray-300 px-7 py-3 rounded-full font-semibold"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className=" text-gray-200 border border-gray-200 hover:bg-gray-200/10 transition px-7 py-3 rounded-full font-semibold"
          >
            Sign up
          </Link>
        </div>
      </main>
    )
  }

  if (isLoading) return <div>Loading tweets...</div>

  console.log('DATA FROM API:', data)
  return (
    <>
      <main className=" border-b border-gray-700 ">
        <UserNav />
        <UserNavPost refetchTweets={refetch} />
        <TweetsList tweets={data?.data || []} />
      </main>
    </>
  )
}

export default Home
