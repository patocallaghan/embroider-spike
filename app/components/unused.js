import Component from '@glimmer/component';

export default class UnusedComponent extends Component {
  constructor() {
    super(...arguments);
    console.log(
      "TREESHAKE [Unused component]: This shouldn't be present in the build"
    );
  }
}
