'use client'

import UserNav from '../components/UserNav'
import UserNavPost from '../components/UserNavPost'
import TweetsList from '../components/TweetsList'
import {useQuery} from '@tanstack/react-query'

async function getTweets() {
  const res = await fetch('http://localhost:3000/api/tweets', {
    method: 'GET',
    cache: 'no-store'
  })
  return res.json()
}

function Home() {

  // console.log(tweets)
  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['tweets'],
    queryFn: getTweets
  })
  return (
    <main className=" border-b border-gray-700 ">
      <UserNav />
      <UserNavPost refetchTweets={refetch} />
      <TweetsList tweets={data?.data || []} />
    </main>
  )
}

export default Home
