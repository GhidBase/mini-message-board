import express from "express";

// my server
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
        throw error;
    }

    console.log("server running");
});
