import UserNav from '../components/UserNav'
import UserNavPost from '../components/UserNavPost'
import TweetsList from '../components/TweetsList'

async function getTweets() {
  const res = await fetch('https://dummyjson.com/posts')
  return res.json()
}

async function Home() {
  const tweets = await getTweets()
  // console.log(tweets)

  return (
    <main className=" border-b border-gray-700 ">
      <UserNav />
      <UserNavPost />
      <TweetsList tweets={tweets} />
    </main>
  )
}

export default Home
