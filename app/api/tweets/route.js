import dbConnect from '../../../lib/mongodb'
import Tweet from '../../../models/Tweet'

export async function GET() {
  await dbConnect()

  try {
    const tweets = await Tweet.find({}).sort({createdAt: -1})

    return Response.json({success: true, data: tweets}, {status: 200})
  } catch (error) {
    return Response.json({success: false, error: error.message}, {status: 400})
  }
}

export async function POST(req) {
  await dbConnect()

  try {
    const {content, authorId, authorUsername} = await req.json()

    if (!content || !authorId || !authorUsername) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing fields'
      }), {status: 400})
    }

    const tweet = await Tweet.create({
      content,
      author: {
        id: authorId,
        username: authorUsername
      }
    })
    return new Response(JSON.stringify({
      success: true,
      data: tweet
    }), {status: 201})
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {status: 400})
  }
}
