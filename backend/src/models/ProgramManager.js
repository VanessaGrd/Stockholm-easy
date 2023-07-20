const AbstractManager = require("./AbstractManager");

class ProgramManager extends AbstractManager {
  constructor() {
    super({ table: "program" });
  }

  insert(program) {
    return this.database.query(
      `insert into ${this.table} (user_id, activity_id) values (?, ?)`,
      [program.user_id, program.activity_id]
    );
  }

  findActivityByUserId(userId) {
    return this.database.query(
      `SELECT program.id AS program_id, user_id, activity_id, activity.name AS activity_name, activity.address AS activity_address, activity.openingHours AS activity_openingHours, activity.price AS activity_price, activity.picture AS activity_picture 
      FROM program 
      JOIN activity ON program.activity_id = activity.id 
      WHERE program.user_id = ?`,
      [userId]
    );
  }
}

module.exports = ProgramManager;
