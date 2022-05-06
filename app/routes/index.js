import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  queryParams = {
    rating: {
      replace: true,
      refreshModel: true,
    },
  };

  async model(params) {
    if (['g', 'pg', 'pg-13', 'r'].includes(params?.rating)) {
      return this.store.query('gif', { rating: params.rating });
    }
    return this.store.query('gif');
  }
}
