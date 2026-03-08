function checkNodeVersion() {
  const [major] = process.versions.node.split(".");
  return parseInt(major) >= 20;
}

checkNodeVersion();
