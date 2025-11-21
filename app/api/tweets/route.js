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
    const body = await req.json()
    const tweet = await Tweet.create(body)

    return Response.json({success: true, data: tweet}, {status: 201})
  } catch (error) {
    return Response.json({success: false, error: error.message}, {status: 400})
  }
}
