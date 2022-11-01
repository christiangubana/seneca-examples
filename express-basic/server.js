// Notes.
// Use standardjs style: https://standardjs.com/

const Express = require("express");
const Seneca = require("seneca");

const app = Express();

// TODO:
// 1. extend to support red, green, blue - generate PR

app.use("/color/:name", function (req, res) {
  let name = req.params.name;
  console.log("NAME", name.toLocaleLowerCase());

  let code = "#cccccc";
  switch (name) {
    case "AliceBlue":
      code = "#f0f8ff";
      break;
    case "BurlyWood":
      code = "#deb887";
      break;
    case "red":
      code = "#ff0000";
      break;
    case "green":
      code = "#00ff00";
      break;
    case "blue":
      code = "#0000ff";
      break;
    case "ForestGreen":
      code = "#228b22";
      break;
    default:
      console.log(`Sorry, we are out of ${name} color.`);
  }
  res.send(code);
});

app.listen(3000);
