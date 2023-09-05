import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export async function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === 'GET') {
    try {
      const result = sql`CREATE TABLE Users ( Name varchar(255), Password varchar(255), Email varchar(255) );`;
      return response.status(200).json({ result });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    response.status(405).end(); // Method Not Allowed
  }
}
