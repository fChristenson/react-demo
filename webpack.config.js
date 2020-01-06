const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "public", "ts", "main.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development"
};
