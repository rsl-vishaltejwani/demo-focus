import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model({ id }) {
    return { id };
  }
}