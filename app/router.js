import EmberRouter from "@embroider/router";
import config from "./config/environment";

const USE_CUSTOM_ROUTE_MAP = Boolean(window.USE_CUSTOM_ROUTE_MAP);

export default class CustomRouter extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  static map() {
    if (USE_CUSTOM_ROUTE_MAP) {
      super.map(function() {
        this.route('custom');
      });
    } else {
      super.map(...arguments);
    }
  }
}

CustomRouter.map(function () {
  this.route("players");
  this.route("teams");
  this.route("table");
  this.route('parent', function() {
    this.route('child', function() {
      this.route('grandchild');
    });
  });
  this.route('addons');
});
