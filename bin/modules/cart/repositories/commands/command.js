class Command {
  constructor(db) {
    this.db = db;
  }

  async insertOneCart(document){
    this.db.setCollection('cart');
    const result = await this.db.insertOne(document);
    return result;
  }

  async updateOneCart(document){
    this.db.setCollection('cart');
    const result = await this.db.updateOne(document);
    return result;
  }

  async deleteOneCart(document){
    this.db.setCollection('cart');
    const result = await this.db.deleteOne(document);
    return result;
  }
}

module.exports = Command;
