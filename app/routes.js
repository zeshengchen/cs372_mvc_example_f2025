import express from 'express'
import { showHome } from './controllers/main.controller.js'
import { showPosts, showSingle, seedPosts, showCreate, processCreate } from './controllers/posts.controller.js'

// create a new express routes
const router = express.Router()

// export retoutes
export default router 

// define routes

// home routes
router.get('/', showHome)

// seed events
router.get('/posts/seed', seedPosts)

// posts routes
router.get('/posts', showPosts)

// create posts
router.get('/posts/create', showCreate)
router.post('/posts/create', processCreate)

// single post routes
router.get('/posts/:slug', showSingle)
