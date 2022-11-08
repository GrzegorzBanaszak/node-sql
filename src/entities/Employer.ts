import db from "../services/db";
import { IEmployersColumns } from "./IEmployersColumns";
import { Queiries } from "./Queries";

class Employer extends Queiries<IEmployersColumns> {
  constructor() {
    super({ firstName: "", lastName: "", email: "" });
  }

  async test(): Promise<any> {
    const conn = await db;

    const query = `Select ${this.getProberties()} from employers`;

    const [data, _] = await conn.query(query, [0, 20]);

    return data;
  }
}

export { Employer };
