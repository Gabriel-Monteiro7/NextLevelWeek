import knex from "knex";

const connection = knex({
  client: "postgresql",
  connection: process.env.DATABASE_URL,
  useNullAsDefault: true,
});

export default connection;
