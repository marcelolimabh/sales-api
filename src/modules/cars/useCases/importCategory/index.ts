import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase: ImportCategoryUseCase =
  new ImportCategoryUseCase();
const importCategoryController: ImportCategoryController =
  new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
