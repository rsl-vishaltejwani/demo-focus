import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class Links extends Component {
  @service('focus-tracker') focusTracker;

  constructor() {
    super(...arguments);
    console.log('#### Links constructor - called');
    if (this.focusTracker.lastFocusedElementId) {
      console.log(`#### Links constructor - Setting focus to ${this.focusTracker.lastFocusedElementId}`);
      setTimeout(() => {
        document.querySelector(`#${this.focusTracker.lastFocusedElementId}`).focus();
      }, 0);
      this.focusTracker.shouldBackButtonGetFocus = false;
    } else {
      console.log(`#### Links constructor - Triggering setting focus to the back link`);
      this.focusTracker.shouldBackButtonGetFocus = true;
    }
  }

  @action
  storeFocusedElementId(evt) {
    console.log('#### Links storeFocusedElementId - called');
    this.focusTracker.lastFocusedElementId = evt.target.id;
  }
}