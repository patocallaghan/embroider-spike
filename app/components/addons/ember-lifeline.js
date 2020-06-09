import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { runTask, runDisposables } from "ember-lifeline";

export default class AddonsEmberLifelineComponent extends Component {
  @tracked date;

  constructor() {
    super(...arguments);

    runTask(
      this,
      () => {
        this.date = new Date();
      },
      500
    );
  }

  willDestroy() {
    runDisposables(this);
  }
}
