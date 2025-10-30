import Post from '../models/post.js'

/** 
 * show all posts
 */
async function showPosts(req, res) {
    // get all posts
    try {
        const posts = await Post.find({})

        // return a view with data
        res.render('pages/posts', { posts: posts })

    } catch {
        res.status(404)
        res.send('Posts not found')
    }
}

/**
 * show a single post
 */
async function showSingle(req, res) {
    // get a single post
    try {
        const post = await Post.findOne({ slug: req.params.slug })

        if (post !== undefined && post !== null )
            res.render('pages/single', { post: post })
        else {
            res.status(404)
            res.send('Post not found!')
        }
    } catch {
        res.status(404)
        res.send('Post not found!')
    }
}

/**
 * seed db with some posts
 */
async function seedPosts(req, res) {
    // create some posts 
    const list_posts = [
        { name: 'Homework', description: 'Homework is challenging!' },
        { name: 'Lecture', description: 'Lecture is fun!' },
        { name: 'Project', description: 'Course Project is great!' }
    ]

    // use the Post model to insert/save
    await Post.deleteMany({})

    // use the Post model to insert/save
    for (const aPost of list_posts) {
        let newPost = new Post(aPost)
        await newPost.save()
    }

    // seeded!
    res.send('Database seeded!')
}

export { showPosts, showSingle, seedPosts}
