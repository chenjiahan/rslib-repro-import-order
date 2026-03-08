function checkNodeVersion() {
  const [major] = process.versions.node.split(".");
  if (parseInt(major) < 20) {
    throw new Error("Node.js version must be >= 20");
  }
}

checkNodeVersion();
