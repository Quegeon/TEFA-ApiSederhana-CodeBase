const Cart = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const cart = new Cart(db);

const getAllCart = async () => {
  const getData = async () => {
    const result = await cart.getAllCart();
    return result;
  };
  const result = await getData();
  return result;
};

const getCartById = async (id) => {
  const getData = async () => {
    const result = await cart.getCartById(id);
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
  getAllCart,
  getCartById,
};
