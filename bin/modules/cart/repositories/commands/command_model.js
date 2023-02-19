const joi = require('joi');

const cart = joi.object({
  produk: joi.string().required(),
  foto: joi.string().required(),
  harga: joi.string().required(),
  keterangan: joi.string().required(),
  isActive : joi.boolean().default(true, 'Example If Need Default Value')
});

module.exports = {
  cart,
};
