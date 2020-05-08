export default (req, res, next) => {
  if (req && req.session && req.session.userInfo && req.session.userInfo.uid) {
    next()
  } else {
    res.status(500).send({
      message: 'needLogin',
      status: 401
    })
  }
}
