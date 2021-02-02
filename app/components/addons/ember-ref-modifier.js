import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AddonsEmberRefModifierComponent extends Component {
  div;

  @action
  updateDivText() {
    this.div.innerHTML = 'the ref-modifier works!';
  }
}
