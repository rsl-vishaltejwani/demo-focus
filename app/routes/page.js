import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('focus-tracker') focusTracker;

  model({ id }) {
    this.focusTracker.shouldBackButtonGetFocus = true;
    return { id };
  }
}