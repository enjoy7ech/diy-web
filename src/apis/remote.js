import { Router } from 'express'
import { createMsRequest } from '../core/request/ms'

let router = new Router()

router.post('/getSuggestions', (req, res, next) => {
  createMsRequest(req)
    .post('/remote/getSuggestions', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/user-state', (req, res, next) => {
  res.json(req.session.userInfo)
})

export default router
