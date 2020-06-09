import EmberRouter from "@embroider/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
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
