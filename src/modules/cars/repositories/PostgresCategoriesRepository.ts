import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(`Creating Postgres with: ${name} description: ${description}`);
  }
  list(): Category[] {
    console.log("Listing Postgres");
    return null;
  }
  findByName(name: string): Category {
    console.log(`Finding Postgres by: name: ${name}`);
    return null;
  }
}
