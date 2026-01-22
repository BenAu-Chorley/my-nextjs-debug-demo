import { NextResponse } from 'next/server';

export async function GET() {
  const data = { message: 'Hello from API' };
  console.log('API: Returning data', data); // Shows in terminal
  return NextResponse.json(data);
}
