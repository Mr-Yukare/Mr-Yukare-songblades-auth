module.exports = (req, res) => {
  const { code, state } = req.query;
  if (code) {
    res.redirect(302, `songbladesapp://auth?code=${code}&state=${state || ''}`);
  } else {
    res.status(400).send('No code');
  }
};
