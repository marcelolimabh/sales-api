/* eslint-disable no-use-before-define */
import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;
  private constructor() {
    this.specifications = [];
  }

  public static getInstacnce(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }
  findByName(name: string): Specification {
    return this.specifications.find((s) => s.name === name);
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);
  }
}
export { SpecificationsRepository };
