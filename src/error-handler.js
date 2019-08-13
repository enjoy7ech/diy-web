const errorHandler = (err, req, res, next) => {
  // 统一返回浏览器处理
  res.status(500).send(err)
}

export default errorHandler
