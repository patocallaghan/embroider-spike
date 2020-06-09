import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import moveSVG from "ember-animated/motions/move-svg";
import { parallel } from "ember-animated";

export default class AddonsEmberAnimatedComponent extends Component {
  @tracked bubbles;

  constructor() {
    super(...arguments);

    this.bubbles = this.randomBubbles();
  }

  randomBubbles() {
    let list = [];
    for (let id = 0; id < 10; id++) {
      list.push({
        id,
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        radius: Math.floor(Math.random() * 50),
      });
    }
    return list;
  }

  *moveThem({ keptSprites }) {
    keptSprites.forEach(
      parallel(
        moveSVG.property("cx"),
        moveSVG.property("cy"),
        moveSVG.property("r")
      )
    );
  }

  @action
  move() {
    this.bubbles = this.randomBubbles();
  }
}
