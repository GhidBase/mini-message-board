import { Router } from "express";

const router = Router();
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
    {
        text: "I <3 Omarchy!",
        user: "Pewdiepie",
        added: new Date(),
    },
    {
        text: "DHH MUST BE STOPPED",
        user: "Random Guy on the Internet",
        added: new Date(),
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

export default router;
