require("dotenv").config();

const { Corellium } = require("@corellium/corellium-api");

const corellium = new Corellium({
  endpoint: process.env.ENDPOINT,
  apiToken: process.env.API_TOKEN,
});

const { parseArgs } = require("node:util");

const { values } = parseArgs({
  options: {
    command: {
      type: "string",
      short: "c",
    },
  },
});

async function main() {
  await corellium.login();

  let project = await corellium.projectNamed(process.env.PROJECT);
  let instance = await project.getInstance(process.env.INSTANCE);

  let agent = await instance.agent();
  await agent.ready();

  switch (values.command) {
    case "status":
      console.log("[+] Fetching SSL pinning status...");
      let enabled = await agent.isSSLPinningEnabled();
      if (enabled) {
        console.log("[*] SSL pinning is enabled");
      } else {
        console.log("[*] SSL pinning is disabled");
      }
      break;

    case "enable":
      console.log("[+] Enabling SSL pinning...");
      await agent.enableSSLPinning();
      break;

    case "disable":
      console.log("[-] Disabling SSL pinning...");
      await agent.disableSSLPinning();
      break;

    default:
      console.error("[x] Invalid argument choose [status, enable, disable]");
  }

  return;
}

main().catch((err) => {
  console.error(err);
});
