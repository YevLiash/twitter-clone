import dbConnect from '../../../lib/mongodb'
import User from '../../../models/User'
import bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'supersecret'

export async function POST(req) {
  await dbConnect()

  try {
    const {email, password} = await req.json()

    if (!email || !password) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Email and password are required'
      }), {status: 400})
    }

    const user = await User.findOne({email})
    if (!user) {
      return new Response(JSON.stringify({
        success: false,
        error: 'User not found'
      }), {status: 404})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid password'
      }), {status: 401})
    }

    const token = jwt.sign({
      id: user._id,
      email: user.email,
      username: user.username
    }, SECRET, {expiresIn: '7d'})

    return new Response(JSON.stringify({
      success: true,
      data: {username: user.username, email: user.email, id: user._id},
      token
    }), {status: 200})

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {status: 500})
  }
}
