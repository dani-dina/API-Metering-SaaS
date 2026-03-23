import { registerUser } from '../services/auth.service.js';

export const register = async (req, res) => {     
  const { email, password, organizationName } = req.body;

  if (!email || !password || !organizationName) {
    return res.status(400).json({ message: 'Email, password, and organization name are required' });
  }

  try {
    const user = await registerUser(email, password, organizationName);
    res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  } 
};