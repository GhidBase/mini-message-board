import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("form", { message: "Hola" });
});

newMessageRouter.post("/", (req, res) => {
    console.log("post request received");
    console.log(req.body.messageName);
    console.log(req.body.messageText);
    res.render("form", { message: "Hola" });
});

export default newMessageRouter;
