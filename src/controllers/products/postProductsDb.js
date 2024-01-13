const { Product } = require("../../db");

const postProduct = async (data) => {
  try {
    console.log('Datos recibidos en el controlador:', data);

    const product = await Product.create(data);

    console.log('Producto creado:', product);

    return product;
  } catch (error) {
    console.error('Error en el controlador:', error);
    throw new Error(error.message);
  }
};

module.exports = { postProduct };