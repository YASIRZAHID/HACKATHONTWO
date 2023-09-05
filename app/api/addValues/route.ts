import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export async function POST(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === 'POST') {
    {
        try {
          const username = request.query.petName as string;
          const password = request.query.ownerName as string;
          const email = request.query.ownerName as string;
          if (!username || !password || !email) throw new Error('Username and password and email required');
          await sql`INSERT INTO Users (Username, password, email) VALUES (${username}, ${password}, ${email});`;
        } catch (error) {
          return response.status(500).json({ error });
        }
        const users = await sql`SELECT * FROM Users;`;
        return response.status(200).json({ users });
      }
  } else {
    response.status(405).end(); // Method Not Allowed
  }
}

