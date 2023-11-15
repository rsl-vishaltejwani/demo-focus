import { modifier } from 'ember-modifier';

export default modifier((element, [shouldBackButtonGetFocus]) => {
  if (shouldBackButtonGetFocus) {
    console.log('#### AutofocusBack - Setting focus to the back link');
    setTimeout(() => {
      document.querySelector('#back-link').focus();
    }, 0);
  }
});