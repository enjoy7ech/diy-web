import { Router } from 'express'

let router = new Router()

router.post('/test', (req, res) => {
  res.json({ name: 'test' })
})
export default router
