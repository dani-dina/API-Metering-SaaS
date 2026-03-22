import { User } from '../models/user.model';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcrypt';      

export async function registerUser(req, res) {
  const { username, password } = req.body;  
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    } 
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    const token = generateToken({ id: newUser.id, username: newUser.username });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function loginUser(req, res) { 
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = generateToken({ id: user.id, username: user.username });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

