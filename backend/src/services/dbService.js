import pg from "pg";
import db from "../configs/dbConfig.js";

const { Pool } = pg;

const dbService = {};
let connectionPool = null;

dbService.query = async (text, params) => {
  const { rows } = await getConnection().query(text, params);

  return rows;
};

function getConnection() {
  if (connectionPool) {
    return connectionPool;
  } else {
    connectionPool = new Pool(db);
    return connectionPool;
  }
}

export default dbService;
