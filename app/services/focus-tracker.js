import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FocusTracker extends Service {
  @tracked lastFocusedElementId = null;
  @tracked shouldBackButtonGetFocus = false;
}