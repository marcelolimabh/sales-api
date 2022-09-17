import { Router } from "express";

import { Category } from "../model/Category";

const categories = [];
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const category: Category = new Category();
  Object.assign(category, { name, description, created_at: new Date() });
  categories.push(category);
  return res.status(201).json({ category });
});
export { categoriesRoutes };
