module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": "3306",
  "username": "ailson",
  "password": "bia",
  "database": "smarkio",
  "migrations": ["./src/migrations/**.js"],
  "cli": {
    "migrationsDir": "./src/migrations"
  }
}