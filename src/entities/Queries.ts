import db from "../services/db";

export class Queiries<T> {
  entities: T;
  table: string;

  constructor(value: T, table: string) {
    this.entities = value;
    this.table = table;
  }

  getProberties(): Array<string> {
    return Object.keys(this.entities);
  }

  async getAll(): Promise<any> {
    const conn = await db;

    const query = `Select ${this.getProberties()} from ${this.table}`;

    const [data, _] = await conn.query(query, [0, 20]);

    return data;
  }

  async getWithQueries(queries: object) {
    const conn = await db;

    let query = `Select ${this.getProberties()} from ${this.table} where `;

    const entries = Array<any>(0);

    Object.entries(queries).forEach(([key, value]) => {
      if (value !== undefined) {
        entries.push({
          key,
          value,
        });
      }
    });

    let textValue = "";

    for (let i = 0; i < entries.length; i++) {
      if (entries.length - 1 === i) {
        textValue = `${entries[i].key}='${entries[i].value}'`;
      } else {
        textValue = `${entries[i].key}='${entries[i].value}' AND `;
      }

      query += textValue;
    }

    const [data, _] = await conn.query(query, [0, 20]);

    return data;
  }
}
