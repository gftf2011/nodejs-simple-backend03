import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  res.status(200).send({ message: "Olá Mundo!" });
});

export default routes;
