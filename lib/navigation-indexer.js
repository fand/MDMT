const Watchpack = require("watchpack");
const fs = require("fs");
const path = require("path");
const config = require("../config");

const pagesDir = path.resolve(__dirname, "../pages");
const dst = path.resolve(__dirname, "navigation.js");

const build = files => {
  console.log(">> Builing navigation index");

  for (const [absPath, v] of Object.entries(files)) {
    const relPath = path.relative(pagesDir, absPath);

    // const str = fs.readFileSync(absPath, 'utf8');

    console.log(">>>>", relPath);
  }
};

const start = isWatching => {
  const wp = new Watchpack();
  wp.watch([], [pagesDir], 0);

  wp.on("aggregated", (changes, removals) => {
    const files = wp.getTimes();
    build(files);

    if (!isWatching) {
      wp.close();
      process.exit();
    }
  });
};

const watch = process.argv[2] === "-w";
start(watch);
