import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config'; 
export function generateToken(payload: object, expiresIn: string | number = '1h'): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}