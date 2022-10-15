# corellium-utils

[![Language](https://img.shields.io/badge/Lang-JavaScript-blue.svg)](https://www.javascript.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)

## Corellium Utility Scripts

A collection of scripts that leverage the [Corellium API](https://corellium.github.io/corellium-api/) with the aim of facilitating pentesting activities.

Currently comprises of:

- `sslPinning.js`: Allows querying the current `status` of SSL pinning as well as switching SSL pinning `on`/`off`.
- `takeScreenshot.js`: Facilitates screenshot taking by directly dropping screenshots within the local `screenshots` folder.

## Installation

1. Install [Node.js](https://nodejs.org/en/).

2. Install the project dependencies:

   > [!IMPORTANT]
   > The command below is to be executed in the root folder of this project.

   ```bash
   npm install
   ```

3. Create an `.env` file on the root folder with the following data:

   > [!NOTE]
   > Replace the placeholder values below with your values.

   ```
   API_TOKEN="XXX"
   ENDPOINT="https://app.corellium.com"
   INSTANCE="XXX"
   PROJECT="Default Project"
   ```

## Usage

- To take a screenshot:

  ```bash
  node .\takeScreenshot.js
  ```

- To check the `status` of SSL pinning:

  ```bash
  node .\sslPinning.js -c status
  ```

- To `enable` SSL pinning bypass:

  ```bash
  node .\sslPinning.js -c enable
  ```

- To `disable` SSL pinning bypass:

  ```bash
  node .\sslPinning.js -c disable
  ```

## Roadmap

- [ ] Improve the `argparsing` logic.
- [ ] Merge the scripts into a master script with more function modularity, e.g., `login`.
- [ ] Automate proxying to Burp Suite, so far it seems that the current version of the [Corellium API](https://corellium.github.io/corellium-api/) does not export any function that could enable us implementing this feature.
- [ ] Implement additional features - open to suggestions.

## Sponsor 💖

If you want to support this project and appreciate the time invested in developping, maintening and extending it; consider donating toward my next cup of coffee. ☕

It is easy, all you got to do is press the `Sponsor` button at the top of this page or alternatively [click this link](https://github.com/sponsors/aress31). 💸

## Reporting Issues

Found a bug? I would love to squash it! 🐛

Please report all issues on the GitHub [issues tracker](https://github.com/aress31/corellium-utils/issues).

## Contributing

You would like to contribute to better this project? 🤩

Please submit all `PRs` on the GitHub [pull requests tracker](https://github.com/aress31/corellium-utils/pulls).

## License

See [LICENSE](LICENSE) for details.
