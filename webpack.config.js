const path = require("path");

module.exports = {
  entry: "./src/app.js", // กำหนด entry file
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development", // หรือ "production"
};
