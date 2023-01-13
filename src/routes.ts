import { response, Router } from "express"
import { request } from "http"

const router = Router()

router.post('/users', (request, response) => {
  return response.status(201).send()
})

export { router }