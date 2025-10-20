
import Link from 'next/link'
import TweetCard from '@/components/TweetCard'

async function getTweets(){
  const res = await fetch("https://dummyjson.com/posts")
  return  res.json()
}

async function Home() {
  const tweets = await getTweets()
   console.log(tweets)

  return (
    <main>
      <ul>
        {tweets.posts.map((tweet) => (
          <Link href={`/tweet/${tweet.id}`} key={tweet.id}><TweetCard tweet={tweet} /></Link>
        ))}
      </ul>
    </main>
  );
}

export default Home
