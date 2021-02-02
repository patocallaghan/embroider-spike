import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AddonsEmberCliFlashComponent extends Component {
  @service flashMessages;

  @action
  showFlashMessage() {
    this.flashMessages.success('You made it!');
  }
}
