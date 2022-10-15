require("dotenv").config();

const fs = require("fs");

const { Corellium } = require("@corellium/corellium-api");

const corellium = new Corellium({
  endpoint: process.env.ENDPOINT,
  apiToken: process.env.API_TOKEN,
});

async function main() {
  await corellium.login();

  let project = await corellium.projectNamed(process.env.PROJECT);
  let instance = await project.getInstance(process.env.INSTANCE);

  const screenshot = await instance.takeScreenshot();
  fs.writeFileSync(
    "screenshots/" +
      instance.info.flavor +
      "_Screenshot_" +
      Date.now() +
      ".png",
    screenshot
  );

  return;
}

main().catch((err) => {
  console.error(err);
});
