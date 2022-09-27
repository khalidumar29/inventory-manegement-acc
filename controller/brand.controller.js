const {
  createBrandService,
  getBrandService,
  getBrandByIdService,
} = require("../services/brand.services");

module.exports.createBrand = async (req, res) => {
  try {
    const brand = await createBrandService(req.body);
    res.status(201).send({ status: "success", brand });
  } catch (error) {
    res.status(400).send({ status: "fail", error });
  }
};

module.exports.getBrand = async (req, res) => {
  try {
    const brand = await getBrandService();
    res.status(200).send({ status: "success", brand });
  } catch (error) {
    res.status(400).send({ status: "fail", error });
  }
};

module.exports.getBrandById = async (req, res) => {
  try {
    const brand = await getBrandByIdService(req.params.id);
    res.status(200).send({ status: "success", brand });
  } catch (error) {
    res.status(400).send({ status: "fail", error });
  }
};
