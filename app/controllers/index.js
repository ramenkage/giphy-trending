import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service media;
  @tracked animate = !this.media.isReducedMotion;

  queryParams = ['rating'];
  @tracked rating = 'g';

  @action
  toggleAnimate() {
    this.animate = !this.animate;
  }

  @action
  setRating(rating) {
    this.rating = rating;
  }
}
