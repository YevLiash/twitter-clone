'use client'

import UserNav from '../components/UserNav'
import UserNavPost from '../components/UserNavPost'
import TweetsList from '../components/TweetsList'
import {useUser} from '../context/UserContext'
import {useQuery} from '@tanstack/react-query'
import Welcome from '../components/Welcome'
import Loader from '../components/Loader'

async function getTweets() {
  const res = await fetch('/api/tweets', {
    method: 'GET',
    cache: 'no-store',
    credentials: 'include'
  })
  return res.json()
}

function Home() {
  const {user, loading} = useUser()

  if (loading) {
    return <Loader />
  }

  if (!user) return <Welcome />

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['tweets'],
    queryFn: getTweets,
    enabled: !!user
  })

  if (isLoading) return <Loader />

  console.log('DATA FROM API:', data)
  return (
    <main className=" border-b border-gray-700 ">
      <UserNav />
      <UserNavPost refetchTweets={refetch} />
      <TweetsList
        tweets={data?.data || []}
        refetchTweets={refetch}
      />
    </main>


  )
}

export default Home
