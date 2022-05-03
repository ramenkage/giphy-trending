import ApplicationAdapter from './application';

export default class GifAdapter extends ApplicationAdapter {
  // The GIPHY API doesn't serve anything at /gifs, so modify findAll and query to use /gifs/trending
  urlForFindAll(...args) {
    const baseUrl = super.urlForFindAll(...args);
    return `${baseUrl}/trending`;
  }
  urlForQuery(...args) {
    const baseUrl = super.urlForQuery(...args);
    return `${baseUrl}/trending`;
  }
}
