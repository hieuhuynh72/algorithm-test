// routes/smartphone.js
const express = require("express");
const {
  Smartphone,
  Price,
  SmartphoneBodyColor,
  SmartphoneDataMemory,
  SmartphoneOSVersion,
  sequelize, // Assuming you have a sequelize instance exported from your models
} = require("../models");
const router = express.Router();
const Logger = require("../utils/logger");

// POST /register-smartphone
router.post("/register-smartphone", async (req, res) => {
  const {
    model,
    year_of_manufacture,
    os_version_id,
    manufacturer_id,
    body_color_id,
    data_memory_id,
    price,
  } = req.body;

  const transaction = await sequelize.transaction();

  try {
    const smartphone = await Smartphone.create(
      {
        model,
        year_of_manufacture,
        os_version_id,
        manufacture_id: manufacturer_id,
      },
      { transaction }
    );

    await Promise.all([
      SmartphoneBodyColor.create(
        {
          smartphone_id: smartphone.id,
          body_color_id: body_color_id,
        },
        { transaction }
      ),
      SmartphoneDataMemory.create(
        {
          smartphone_id: smartphone.id,
          data_memory_id: data_memory_id,
        },
        { transaction }
      ),
      SmartphoneOSVersion.create(
        {
          smartphone_id: smartphone.id,
          os_version_id: os_version_id,
        },
        { transaction }
      ),
      Price.create(
        {
          smartphone_body_color_id: body_color_id,
          smartphone_data_memory_id: data_memory_id,
          price: price,
        },
        { transaction }
      ),
    ]);

    await transaction.commit();

    res
      .status(201)
      .json({ message: "Smartphone registered successfully!", smartphone });
  } catch (error) {
    await transaction.rollback();
    Logger.error(error);
    res.status(500).json({
      message: "Failed to register smartphone.",
      error: error.message,
    });
  }
});

module.exports = router;
