const AbstractManager = require("./AbstractManager");

class ActivityManager extends AbstractManager {
  constructor() {
    super({ table: "activity" });
  }

  insert(activity) {
    return this.database.query(
      `insert into ${this.table} (name, address, openingHours, price, picture) values (?, ?, ?, ?, ?)`,
      [
        activity.name,
        activity.address,
        activity.openingHours,
        activity.price,
        activity.picture,
      ]
    );
  }

  update(activity) {
    return this.database.query(
      `update ${this.table} set name = ?, address = ?, openingHours = ?, price = ?, picture = ? where id = ?`,
      [
        activity.name,
        activity.address,
        activity.openingHours,
        activity.price,
        activity.picture,
        activity.id,
      ]
    );
  }
}

module.exports = ActivityManager;
