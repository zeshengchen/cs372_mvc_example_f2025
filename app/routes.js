import express from 'express'
import { showHome } from './controllers/main.controller.js'

// create a new express routes
const router = express.Router()

// export retoutes
export default router 

// define routes
router.get('/', showHome)
