const errorHandler = (err, req, res, next) => {
  // 统一返回浏览器处理
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}

export default errorHandler
