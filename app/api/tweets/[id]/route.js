import dbConnect from '../../../../lib/mongodb'
import Tweet from '../../../../models/Tweet'

export async function GET(req, {params}) {
  await dbConnect()
  const pageParams = await params

  try {
    console.log(pageParams.id)
    const tweet = await Tweet.findById(pageParams.id)

    if (!tweet) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Tweet not found'
      }), {status: 404})
    }

    return new Response(JSON.stringify({
      success: true,
      tweet: tweet
    }), {status: 200})
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {status: 400})
  }
}
