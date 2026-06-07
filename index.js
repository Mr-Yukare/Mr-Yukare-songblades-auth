module.exports = function handler(req, res) {
  const code = req.query.code;
  const state = req.query.state;
  
  if (code) {
    res.redirect(302, `songbladesapp://auth?code=${code}&state=${state || ''}`);
  } else {
    res.status(400).send('Songblades Auth - No code provided');
  }
}
