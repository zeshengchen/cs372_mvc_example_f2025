import Post from '../models/post.js'

function showPosts(req, res) {
    // get all posts

    // return a view with data
    res.render('pages/posts', { posts: posts })
}

function showSingle(req, res) {
    // get a single post
    const post = { name: 'Homework', slug: 'homework', description: 'Homework is challenging!' }

    res.render('pages/single', { post: post })
}

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
