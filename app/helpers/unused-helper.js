// this wont be used in the app so it shouldn't appear in the build

import { helper } from "@ember/component/helper";

export default helper(function unusedHelper(params /*, hash*/) {
  console.log("TREESHAKE: This should not be present in build.");
  return params;
});
