// src/check.ts
function checkNodeVersion() {
  const [major] = process.versions.node.split(".");
  if (parseInt(major) < 20) {
    throw new Error("Node.js version must be >= 20");
  }
}
checkNodeVersion();

// src/index.ts
import * as util from "node:util";
console.log(util.styleText);
