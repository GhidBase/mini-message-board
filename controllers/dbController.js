import db from "../db/queries.js";

async function getAllPosts(req, res) {
    const posts = await db.getAllPosts();
    return posts;
}

async function insertNewPost(text, user, added) {
    await db.insertNewPost(text, user, added);
}

export default { getAllPosts, insertNewPost };
