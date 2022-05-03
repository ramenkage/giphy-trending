import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'giphy-trending/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://api.giphy.com';
  namespace = 'v1';

  ajaxOptions(url, method, options) {
    // Add GIPHY api_key to query paramters
    options.data ??= {};
    options.data.api_key = ENV.GIPHY_KEY;
    return super.ajaxOptions(...arguments);
  }
}
