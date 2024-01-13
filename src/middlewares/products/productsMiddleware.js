const validateProducts = (req, res, next) => {
  const { name, size, brand, price, colors, image } = req.body;

  const nameRegex = /^[a-zA-Z0-9 ]{5,18}$/;
  const priceRegex = /^\d+(\.\d{1,2})?$/;
  const brandRegex = /^(nike|adidas|newbalance)$/;
  const colorRegex = /^[a-zA-Z]{3,10}$/;
  const sizeRegex = /^\d+(\.\d{1,2})?$/;
  const imageRegex = /^.*\.(jpg|jpeg|png|gif)$/i;

  if (!name || (typeof name !== 'string') || !nameRegex.test(name)) {
    return res.status(400).json({ error: "Invalid or Missing Name" });
  }

  if (!size || !Array.isArray(size) || !size.every(s => typeof s === 'number' && sizeRegex.test(s))) {
    return res.status(400).json({ error: "Invalid or Missing Size" });
  }

  if (!brand || (typeof brand !== 'string') || !brandRegex.test(brand.toLowerCase())) {
    return res.status(400).json({ error: "Invalid brand" });
  }

  if (!price || !priceRegex.test(price)) {
    return res.status(400).json({ error: "Invalid or Missing Price" });
  }

  if (!colors || !Array.isArray(colors) || !colors.every(c => typeof c === 'string' && colorRegex.test(c))) {
    return res.status(400).json({ error: "Invalid or Missing Colors" });
  }

  if (!image || !Array.isArray(image) || !image.every(i => typeof i === 'string' && imageRegex.test(i))) {
    return res.status(400).json({ error: "Invalid or Missing Image" });
  }

  req.body.size = size.map(s => parseFloat(s)); // Convertir los tamaños a números
  req.body.colors = colors; // Utilizar directamente el array de colores

  next();
};

module.exports = validateProducts;

