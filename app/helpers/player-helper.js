import { helper } from "@ember/component/helper";

export default helper(function playerHelper(params /*, hash*/) {
  console.log('This should be present in the "players" route bundle');
  return params;
});
