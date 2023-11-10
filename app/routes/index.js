import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      { id: 1, text: 'Link 1' },
      { id: 2, text: 'Link 2' },
      { id: 3, text: 'Link 3' },
      { id: 4, text: 'Link 4' },
      { id: 5, text: 'Link 5' },
      { id: 6, text: 'Link 6' },
      { id: 7, text: 'Link 7' },
      { id: 8, text: 'Link 8' },
      { id: 9, text: 'Link 9' },
    ];
  }
}