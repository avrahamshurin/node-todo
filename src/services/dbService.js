import pg from 'pg';
import db from '../configs/dbConfig.js';

const { Pool } = pg;

const pool = new Pool(db);

const dbService = {};

dbService.query = async (text, params) => {
    const {rows} = await pool.query(text, params);

    return rows;
}

export default dbService;