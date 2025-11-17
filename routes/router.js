import { Router } from "express";
import dbController from "../controllers/dbController.js";

const router = Router();
// In this application I navigate records not by find but by index = id
// So don't go adding removal buttons lol
// It's a fairly easy fix though, and would only need modification
// to the message/id route
let messages = [
    {
        text: "Welcome!",
        user: "Dylan",
        added: new Date(),
        id: 0,
    },
];

router.get("/", async (req, res) => {
    messages = await dbController.getAllPosts();
    console.log("test");
    res.render("index", { message: "Welcome!", messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", async (req, res) => {
    console.log("post request received");
    console.log(req.body.messageName);
    console.log(req.body.messageText);
    messages.push({
        text: req.body.messageText,
        user: req.body.messageName,
        added: new Date(),
    });
    await dbController.insertNewPost(
        req.body.messageText,
        req.body.messageName,
        String(new Date())
    );
    res.redirect("/");
});

router.get("/message/:messageId", (req, res) => {
    const id = req.params.messageId;
    const index = messages.findIndex((message) => message.id == id);

    res.render("details", {
        user: messages[index].username,
        text: messages[index].text,
        added: messages[index].added,
        id: messages[index].id,
    });
    // res.redirect("/");
});

export default router;
