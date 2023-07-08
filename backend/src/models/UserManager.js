const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword, roles, activity_id) values (?, ?, ?, ?, ?, ?)`,
      [
        user.lastname,
        user.firstname,
        user.email,
        user.hashedPassword,
        user.roles,
        user.activity_id,
      ]
    );
  }
}

module.exports = UserManager;
