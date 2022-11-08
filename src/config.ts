const config = {
  db: {
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
  listPerPage: 10,
};
export default config;
