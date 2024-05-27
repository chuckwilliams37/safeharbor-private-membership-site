export default async function handler(req, res) {
    const secretKey = process.env.SANITY_WEBHOOK_SECRET; // Secret key stored in environment variables
    const keyFromRequest = req.headers['x-sanity-webhook-secret']; // Key from request headers
  
    if (req.method === 'POST' && secretKey === keyFromRequest) {
      // Trigger rebuild here
      res.status(200).json({ message: 'Rebuild triggered' });
    } else {
      res.status(403).json({ message: 'Access denied' });
    }
  }