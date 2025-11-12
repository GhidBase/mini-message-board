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

export default router;
