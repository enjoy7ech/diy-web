import { Router } from 'express'
import { createMsRequest } from '../core/request/ms'

let router = new Router()

router.post('/login', (req, res, next) => {
  createMsRequest(req)
    .post('/login', req.body)
    .then(data => {
      if (data.userInfo) {
        req.session.userInfo = {
          uid: data.userInfo.uid,
          userName: data.userInfo.userName,
          role: data.userInfo.role
        }
      }

      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/loginOut', (req, res, next) => {
  // createMsRequest(req)
  if (req.session.userInfo) {
    req.session.userInfo = {}
  }
  res.json()
})

router.post('/register', (req, res, next) => {
  createMsRequest(req)
    .post('/login/register', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

export default router
