module.exports = {
    port: process.env.PORT || 8084,
    db: {
        database: process.env.DB_NAME || "market",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
        dialect: process.env.DIALECT || "mysql",
        host: process.env.HOST || "localhost",
        storage: "./sql_database.sql"
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'THISJWTSECRET'
    }
}
