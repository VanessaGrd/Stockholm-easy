const AbstractManager = require("./AbstractManager");

class ActivityManager extends AbstractManager {
  constructor() {
    super({ table: "activity" });
  }

  insert(activity) {
    return this.database.query(
      `insert into ${this.table} (name, address, openingHours, price, picture, user_id) values (?, ?, ?, ?, ?, ?)`,
      [
        activity.name,
        activity.address,
        activity.openingHours,
        activity.price,
        activity.picture,
        activity.user_id,
      ]
    );
  }

  update(activity) {
    return this.database.query(
      `update ${this.table} set name = ?, address = ?, openingHours = ?, price = ?, picture = ?, user_id = ? where id = ?`,
      [
        activity.name,
        activity.address,
        activity.openingHours,
        activity.price,
        activity.picture,
        activity.user_id,
      ]
    );
  }
}

module.exports = ActivityManager;
