export default function handler(req, res) {
  const { code, state } = req.query;
  
  if (code) {
    // Rediriger vers l'appli avec le code
    res.redirect(`songbladesapp://auth?code=${code}&state=${state || ''}`);
  } else {
    res.status(400).json({ error: 'No code provided' });
  }
}
