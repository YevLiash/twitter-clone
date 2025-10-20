async function getTweet(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  return res.json()
}

async function Tweet({params}) {
  const pageParams = await params
  const tweet = await getTweet(pageParams.id)

  return (
    <div>

      {tweet.body}
    </div>
  )
}

export default Tweet