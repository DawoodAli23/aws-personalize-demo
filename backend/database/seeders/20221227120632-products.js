"use strict";

const { Products } = require("../../database/schemas");

const fs = require("fs").promises;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const JSONdata = JSON.parse(await fs.readFile("./csvjson.json", "utf8"));
    for (let obj of JSONdata) {
      delete obj["url"];
      delete obj["product_id"];
      delete obj["sku"];
      delete obj["gtin13"];
      delete obj["availability"];
      delete obj["uniq_id"];
      delete obj["scraped_at"];
    }
    try {
      await Products.bulkCreate(JSONdata);
    } catch (error) {
      console.log(error.message);
    }
  },

  async down(queryInterface, Sequelize) {
    await Products.destroy({
      where: {},
      truncate: true,
    });
  },
};
