import db from "../services/db";
import { IEmployersColumns } from "./IEmployersColumns";
import { Queiries } from "./Queries";

class Employer extends Queiries<IEmployersColumns> {
  constructor() {
    super({ firstName: "", lastName: "", email: "" }, "employers");
  }
}

export { Employer };
