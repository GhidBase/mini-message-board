import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "public");

// my server
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { message: "Welcome!" });
});

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
        throw error;
    }

    console.log("\nserver running");
    console.log("file: " + __filename);
    console.log("directory: " + __dirname);
    console.log("public assets: " + assetsPath);
});
