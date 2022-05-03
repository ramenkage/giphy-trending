import { module, test } from 'qunit';
import { setupTest } from 'giphy-trending/tests/helpers';

module('Unit | Adapter | gif', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it uses the /gifs/trending endpoint for findAll and query', function (assert) {
    const adapter = this.owner.lookup('adapter:gif');
    const correctUrl = adapter.buildURL() + '/gifs/trending';
    let url = adapter.buildURL('gif', null, null, 'findAll');
    assert.strictEqual(url, correctUrl);
    url = adapter.buildURL('gif', null, null, 'query');
    assert.strictEqual(url, correctUrl);
  });
});
