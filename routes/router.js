import { Router } from "express";

const router = Router();
// In this application I navigate records not by find but by index = id
// So don't go adding removal buttons lol
// It's a fairly easy fix though, and would only need modification
// to the message/id route
const messages = [
    {
        text: "Welcome!",
        user: "Dylan",
        added: new Date(),
        id: 0,
    },
];

router.get("/", (req, res) => {
    res.render("index", { message: "Welcome!", messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
    console.log("post request received");
    console.log(req.body.messageName);
    console.log(req.body.messageText);
    messages.push({
        text: req.body.messageText,
        user: req.body.messageName,
        added: new Date(),
    });
    res.redirect("/");
});

router.get("/message/:messageId", (req, res) => {
    const id = req.params.messageId;
    console.log(id);
    console.log(messages[id]);
    res.render("details", {
        user: messages[id].user,
        text: messages[id].text,
        added: messages[id].added,
        id: messages[id].id,
    });
    // res.redirect("/");
});

export default router;
