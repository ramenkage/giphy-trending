import { module, test } from 'qunit';
import { setupTest } from 'giphy-trending/tests/helpers';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it normalizes gif records', function (assert) {
    const hash = {
      type: 'gif',
      id: 'test_id',
      url: 'test_url',
      title: 'test_title',
      images: {
        original: {
          url: 'test_original_url',
        },
      },
    };

    const store = this.owner.lookup('service:store');
    const normalizedRecord = store.normalize('gif', hash);

    assert.strictEqual(normalizedRecord.data.type, 'gif');
    assert.strictEqual(normalizedRecord.data.id, 'test_id');
    assert.strictEqual(normalizedRecord.data.attributes.url, 'test_url');
    assert.strictEqual(normalizedRecord.data.attributes.title, 'test_title');
    assert.strictEqual(
      normalizedRecord.data.attributes.images.original.url,
      'test_original_url'
    );
  });
});
