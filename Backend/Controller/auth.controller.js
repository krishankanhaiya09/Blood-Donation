import User from "../models/User.js"


export const registeruser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" })
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" })
    }
    
    const newUser = new User({ name, email, password })
    await newUser.save()

    res.status(201).json({ message: "User registered successfully" })

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}



export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: "User not found" })
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" })
    }

    res.status(200).json({ message: "Login successful" })

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}