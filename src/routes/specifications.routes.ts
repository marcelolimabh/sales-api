import { Router } from "express";

import { ISpecificationsRepository } from "../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoute = Router();
const specificationsRepository: ISpecificationsRepository =
  new SpecificationsRepository();

specificationsRoute.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationsRoute };
