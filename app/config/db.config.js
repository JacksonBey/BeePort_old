module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "pleiades",
  DB: "postgres",
  dialect: "postgres",
  listen_addresses: "*",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};