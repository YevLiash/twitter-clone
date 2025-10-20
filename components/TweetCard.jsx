function TweetCard({tweet}) {
  return (
    <div className="flex gap-2">
      {/*<img*/}
      {/*  src=""*/}
      {/*  alt="user-avatar"*/}
      {/*/>*/}
      <div>
        <p>{tweet.userId}</p>
        <h2>{tweet.title}</h2>
        <p>{tweet.body}</p>
      </div>
    </div>
  )
}

export default TweetCard