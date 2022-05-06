# giphy-trending

This Ember app displays the top 50 trending GIFs from GIPHY. It was designed with a nod to the [Hypercontext.com](https://hypercontext.com/) design philosophy for... some reason.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd giphy-trending`
* `npm install`

Add your GIPHY API key to the GIPHY_KEY environment variable before running the app. If you don't have a key, you can sign up for a free account at [GIPHY](https://developers.giphy.com/docs/api/#quick-start-guide) to obtain one.

Alternatively, you can add the key via dotenv. Create a file named `.env` in the `giphy-trending` directory with the following contents:

    GIPHY_KEY=<api-key>

(Replace `<api-key` with your key, and don't include the `<>`.)
  
## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
