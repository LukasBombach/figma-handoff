require("dotenv").config();

module.exports = {
  env: {
    FIGMA_TOKEN: process.env.FIGMA_TOKEN,
    FIGMA_DESIGN_SYSTEM_ID: process.env.FIGMA_DESIGN_SYSTEM_ID,
  },
};
