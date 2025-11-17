import pool from "./pool.js";

async function getAllPosts() {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
}

async function createPostsTable() {
    await pool.query(
        `CREATE TABLE posts (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            username TEXT,
            text TEXT,
            added TEXT
        );
        `
    );
    console.log("createPostsTable ran");
}

async function insertNewPost(text, user, added) {

    await pool.query(
        `INSERT INTO posts (text, username, added) VALUES ($1, $2, $3);`,
        [text, user, added]
    );
}

export default { getAllPosts, insertNewPost };
