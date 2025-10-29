import express from 'express'
import { showHome, showPosts, showSingle } from './controllers/main.controller.js'

// create a new express routes
const router = express.Router()

// export retoutes
export default router 

// define routes

// home routes
router.get('/', showHome)

// posts routes
router.get('/posts', showPosts)

// single post routes
router.get('/posts/:slug', showSingle)
