import { Router } from 'express'
import { createMsRequest } from '../core/request/ms'

let router = new Router()

router.post('/getPorpertyList', (req, res, next) => {
  createMsRequest(req)
    .post('/property/getPorpertyList', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/addRoom', (req, res, next) => {
  createMsRequest(req)
    .post('/property/addRoom', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/updateRoom', (req, res, next) => {
  createMsRequest(req)
    .post('/property/updateRoom', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/deleteRoom', (req, res, next) => {
  createMsRequest(req)
    .post('/property/deleteRoom', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/addProperty', (req, res, next) => {
  createMsRequest(req)
    .post('/property/addProperty', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/updateProperty', (req, res, next) => {
  createMsRequest(req)
    .post('/property/updateProperty', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getBroken', (req, res, next) => {
  createMsRequest(req)
    .post('/property/getBroken', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/fix', (req, res, next) => {
  createMsRequest(req)
    .post('/property/fix', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/addBroken', (req, res, next) => {
  createMsRequest(req)
    .post('/property/addBroken', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})
export default router
