const ObjectId = require('mongodb').ObjectId;

class Query {
  constructor(db) {
    this.db = db;
  }

  async findById(id) {
    this.db.setCollection('cart');
    const parameter = {
      _id: ObjectId(id)
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findAll() {
    this.db.setCollection('cart')
    const recordset = await this.db.findMany();
    return recordset;
  }
}

module.exports = Query;
