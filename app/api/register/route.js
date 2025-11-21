import {NextResponse} from 'next/server'
import dbConnect from '../../../lib/mongodb'
import User from '../../../models/User'
import bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'supersecret'

export async function POST(req) {
  await dbConnect()

  try {
    const {username, email, password} = await req.json()

    if (!username || !email || !password) {
      return NextResponse.json(
        {success: false, message: 'All fields required'},
        {status: 400}
      )
    }

    const existing = await User.findOne({email})
    if (existing) {
      return NextResponse.json(
        {success: false, message: 'Email already registered'},
        {status: 400}
      )
    }

    const hashed = await bcrypt.hash(password, 10)

    const user = await User.create({
      username,
      email,
      password: hashed
    })

    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, SECRET, {expiresIn: '7d'})

    return NextResponse.json({
      success: true,
      user: {username: user.username, email: user.email, id: user._id},
      token
    }, {status: 201})

  } catch (error) {
    return NextResponse.json(
      {success: false, message: error.message},
      {status: 500}
    )
  }
}
