const { getById } = require("../../controllers/products/getDetailProduct");

const getProductByIdHandler = async (req, res) => {
    const { idKey } = req.params;
    try {
        const response = await getById(idKey);
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        
        res.status(404).send("Not Found  Product");
    }
};

module.exports = getProductByIdHandler;