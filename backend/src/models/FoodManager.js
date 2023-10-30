const AbstractManager = require("./AbstractManager");

class FoodManager extends AbstractManager {
  constructor() {
    super({ table: "food" });
  }

  insert(food) {
    return this.database.query(
      `insert into ${this.table} (name, address, price, website) values (?, ?, ?, ?)`,
      [food.name, food.address, food.price, food.website]
    );
  }

  update(food) {
    return this.database.query(
      `update ${this.table} set name = ?, address = ?, price = ?, website = ? where id = ?`,
      [food.name, food.address, food.price, food.picture, food.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = FoodManager;
