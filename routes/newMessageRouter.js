import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("form", { message: "Hola" });
});

newMessageRouter.post("/", (req, res) => {
    console.log("post request received");
});

export default newMessageRouter;
