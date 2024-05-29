export default async function handler(req, res) {
    const secretKey = process.env.SANITY_WEBHOOK_SECRET; // Secret key stored in environment variables
    const keyFromRequest = req.headers['x-sanity-webhook-secret']; // Key from request headers

    console.log("rebuild invoked: ", {req, secretKey, keyFromRequest});

  
    // if (req.method === 'POST' && secretKey === keyFromRequest) {
      // Trigger rebuild here
      res.status(200).json({ message: 'Rebuild triggered' });
    // } else {
      // res.status(403).json({ message: 'Access denied' });
    // }
  }

  export async function GET() {
    // const res = await fetch('https://data.mongodb-api.com/', {
    //   next: { revalidate: 60 }, // Revalidate every 60 seconds
    // })
    const data = "TESTING GET API";
   
    return Response.json(data)
  }