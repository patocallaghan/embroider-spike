import Component from "@glimmer/component";
import window from 'ember-window-mock';

export default class AddonsEmberWindowMockComponent extends Component {

  onClick(url) {
    window.confirm(url);
  }

}
