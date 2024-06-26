const env = process.env;

const db = {
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_EXPOSED_PORT,
    database: env.POSTGRES_DB
};

export default db;

