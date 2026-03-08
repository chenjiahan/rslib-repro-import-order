// src/check.ts
function checkNodeVersion() {
  const [major] = process.versions.node.split(".");
  return parseInt(major) >= 20;
}
checkNodeVersion();

// src/index.ts
import { styleText } from "node:util";
console.log(styleText);
