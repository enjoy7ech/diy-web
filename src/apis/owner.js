import { Router } from 'express'
import { createMsRequest } from '../core/request/ms'

let router = new Router()

router.post('/addOwner', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/addOwner', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/updateOwner', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/updateOwner', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getOwnerList', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/getOwnerList', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getOwnerDetail', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/getOwnerDetail', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getOwnerProperty', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/getOwnerProperty', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getRenterList', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/getRenterList', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/addRenter', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/addRenter', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getRenterDetail', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/getRenterDetail', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/updateRenter', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/updateRenter', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getRented', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/getRented', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/deleteOwner', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/deleteOwner', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/deleteRenter', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/deleteRenter', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/addDebt', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/addDebt', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getDebt', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/getDebt', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/getDebtWithIdnum', (req, res, next) => {
  createMsRequest(req)
    .post('/owner/getDebtWithIdnum', req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

export default router
