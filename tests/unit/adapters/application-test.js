import { module, test } from 'qunit';
import { setupTest } from 'giphy-trending/tests/helpers';
import ENV from 'giphy-trending/config/environment';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  test('it builds a GIPHY API url with the correct host and namespace', function (assert) {
    const adapter = this.owner.lookup('adapter:application');
    const url = adapter.buildURL();
    assert.strictEqual(url, 'https://api.giphy.com/v1');
  });

  test('it adds the API key from ENV.GIPHY_KEY to the query parameters', function (assert) {
    const adapter = this.owner.lookup('adapter:application');
    const ajaxOptions = adapter.ajaxOptions(null, null, {});
    assert.strictEqual(ajaxOptions.data.api_key, ENV.GIPHY_KEY);
  });
});
