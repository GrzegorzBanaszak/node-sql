import { IEmployersColumns } from "./IEmployersColumns";
import { IQueries } from "./IQueries";

export class Queiries<T> {
  entities: T;

  constructor(value: T) {
    this.entities = value;
  }

  getProberties(): Array<string> {
    return Object.keys(this.entities);
  }
}
