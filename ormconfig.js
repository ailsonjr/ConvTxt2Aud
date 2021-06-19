module.exports = {
  "type": "mysql",
  "host": process.env.BD_HOST,
  "port": 3306,
  "username": process.env.BD_USERNAME,
  "password": process.env.BD_PASS,
  "database": process.env.BD,
  "migrations": ["./src/migrations/**.ts"],
  "cli": {
    "migrationsDir": "./src/migrations"
  }
}