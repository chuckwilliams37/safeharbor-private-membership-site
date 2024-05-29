import { type NextRequest } from 'next/server'
import { headers } from 'next/headers'

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
  const headersList = headers()
  const referer = headersList.get('referer')

  console.log("GET", {request, token})

  return new Response(JSON.stringify({message: 'GET'}),  {
    status: 200,
    headers: { referer: referer },
  })
}