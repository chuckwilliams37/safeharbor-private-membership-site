export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Method not allowed' });
      return;
    }
  
    const token = req.cookies.token;
    const referer = req.headers.referer;
  
    console.log("POST", {req, token});
  
    // Your rebuild logic here
  
    res.status(200).json({message: 'POST!!!!'});
  }