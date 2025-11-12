import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import router from "./routes/router.js";
import newMessageRouter from "./routes/newMessageRouter.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "public");

// my server
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newMessageRouter);
app.use("/", router);

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
