import Model, { attr } from '@ember-data/model';

export default class GifModel extends Model {
  @attr title;
  @attr url;
  @attr rating;
  @attr import_datetime;
  @attr images;
  @attr user;
}
