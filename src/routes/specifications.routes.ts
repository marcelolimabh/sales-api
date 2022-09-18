import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification/index";

const specificationsRoute = Router();

specificationsRoute.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

export { specificationsRoute };
