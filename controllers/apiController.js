module.exports = {
  landingPage: (req, res) => {
    const message = 'Hello Json';
    res.status(200).json({ message });
  }
}