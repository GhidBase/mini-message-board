import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("index", { message: "Hola" });
});

export default newMessageRouter;
