import { Router } from 'express'
import { createMsRequest } from '../core/request/ms'

let router = new Router()

router.post('/addVisitRecord', (req, res, next) => {
  createMsRequest(req)
    .post('/sell/addVisitRecord', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getVisitRecord', (req, res, next) => {
  createMsRequest(req)
    .post('/sell/getVisitRecord', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/setVisitRecord', (req, res, next) => {
  createMsRequest(req)
    .post('/sell/setVisitRecord', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/deleteVisitRecord', (req, res, next) => {
  createMsRequest(req)
    .post('/sell/deleteVisitRecord', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/sellHouse', (req, res, next) => {
  createMsRequest(req)
    .post('/sell/sellHouse', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getContract', (req, res, next) => {
  createMsRequest(req)
    .post('/sell/getContract', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/renteHouse', (req, res, next) => {
  createMsRequest(req)
    .post('/sell/renteHouse', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})
export default router
