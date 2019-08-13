import { Router } from 'express'
import { createMsRequest } from '../core/request/ms'

let router = new Router()

router.post('/getUserInfo', (req, res, next) => {
  createMsRequest(req)
    .post('/user/getUserInfo', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/changePassword', (req, res, next) => {
  createMsRequest(req)
    .post('/user/changePassword', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/addUser', (req, res, next) => {
  createMsRequest(req)
    .post('/user/addUser', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/changeRole', (req, res, next) => {
  createMsRequest(req)
    .post('/user/changeRole', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getStaffInfo', (req, res, next) => {
  createMsRequest(req)
    .post('/user/getStaffInfo', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/updateStaffInfo', (req, res, next) => {
  createMsRequest(req)
    .post('/user/updateStaffInfo', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/addStaff', (req, res, next) => {
  createMsRequest(req)
    .post('/user/addStaff', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/deleteStaff', (req, res, next) => {
  createMsRequest(req)
    .post('/user/deleteStaff', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})
export default router
