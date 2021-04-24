const path = require("path");

module.exports={
    entry:"./src/examples/State-hook.js",
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    }
}