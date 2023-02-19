const Cart = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));

const insertCart = async (payload) => {
  const cart = new Cart(db);
  const postCommand = async (payload) => cart.create(payload);
  return postCommand(payload);
};

const updateCart = async (payload) => {
  const cart = new Cart(db);
  const postCommand = async (payload) => cart.update(payload);
  return postCommand(payload);
};

const deleteCart = async (payload) => {
  const cart = new Cart(db);
  const postCommand = async (payload) => cart.del(payload);
  return postCommand(payload);
};

module.exports = {
  insertCart,
  updateCart,
  deleteCart,
};
