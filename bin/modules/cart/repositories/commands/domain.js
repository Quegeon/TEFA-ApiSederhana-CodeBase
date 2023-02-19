const Query = require('../queries/query');
const Command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const logger = require('../../../../helpers/utils/logger');

class Cart {
  constructor(db){
    this.command = new Command(db);
    this.query = new Query(db);
  }

  async create(payload) {
    const { payload: result } = await this.command.insertOneCart(payload)
    return wrapper.data(result);
  }

  async update(payload) {
    const { payload: result } = await this.command.updateOneCart(payload)
    return wrapper.data(result);
  }

  async delete(payload) {
    const { payload: result } = await this.command.deleteOneCart(payload)
    return wrapper.data(result);
  }
}

module.exports = Cart;
