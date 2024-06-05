import fs from 'fs';
import path from 'path';

  export async function GET() {
    const data = "TESTING GET API";
   
    return Response.json(data)
  }

  export async function POST(req,res) {

    const secretKey = process.env.SANITY_WEBHOOK_SECRET;
    const keyFromRequest = req.headers['x-sanity-webhook-secret'];

    if (req.method === 'POST' && secretKey === keyFromRequest) {
      // Touch a file to trigger a rebuild
      fs.utimes(path.resolve('./pages/api/rebuild/index.js'), new Date(), new Date(), () => {});
      res.status(200).json({ message: 'Rebuild triggered' });
    } else {
      res.status(403).json({ message: 'Access denied' });
    }
   
    return Response.json(data)
  }