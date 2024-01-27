const AbstractManager = require("./AbstractManager");

class ActivityManager extends AbstractManager {
  constructor() {
    super({ table: "activity" });
  }

  insert(activity) {
    return this.database.query(
      `insert into ${this.table} (name, address, openingHours, price, picture, website) values (?, ?, ?, ?, ?, ?)`,
      [
        activity.name,
        activity.address,
        activity.openingHours,
        activity.price,
        activity.picture,
        activity.website,
      ]
    );
  }

  update(activity) {
    return this.database.query(
      `update ${this.table} set name = ?, address = ?, openingHours = ?, price = ?, picture = ?, website = ? where id = ?`,
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

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = ActivityManager;
