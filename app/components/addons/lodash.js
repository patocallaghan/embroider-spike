import Component from "@glimmer/component";
import { chunk } from "lodash";

export default class AddonsLodashComponent extends Component {
  numbers = [1, 2, 3, 4, 5, 6];
  chunkedNumbers = chunk(this.numbers, 2);
}
