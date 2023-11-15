import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class Back extends Component {
  @service('focus-tracker') focusTracker;
}