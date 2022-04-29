function getSettings(req, res, next) {
  res.json({
    email: "mauro@gmail.com",
  });
}

module.exports = { getSettings };
