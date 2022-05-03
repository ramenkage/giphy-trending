import JSONAPISerializer from '@ember-data/serializer/json-api';
import { get } from '@ember/object';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalize(typeClass, hash) {
    // Move attributes beneath the 'attributes' key as expected by JSON:API
    const fields = get(typeClass, 'fields');
    hash.attributes = {};

    fields.forEach(function (type, field) {
      if (type == 'attribute') {
        hash.attributes[field] = hash[field];
        delete hash[field];
      }
    });

    return super.normalize(...arguments);
  }
}
