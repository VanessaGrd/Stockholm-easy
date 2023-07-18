const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword, roles) values (?, ?, ?, ?, ?)`,
      [
        user.lastname,
        user.firstname,
        user.email,
        user.hashedPassword,
        user.roles,
      ]
    );
  }

  findByEmailWithPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
