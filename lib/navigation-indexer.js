const Watchpack = require("watchpack");
const path = require("path");
const fs = require('fs');

const pagesDir = path.resolve(__dirname, "../pages");

const wp = new Watchpack();
wp.watch([], [pagesDir], 0)

wp.on("aggregated", function(changes, removals) {
  console.log(">> aggregated:", changes);

  const knownFiles = wp.getTimes();
  for (const [k,v] of Object.entries(knownFiles)) {
    console.log('>>>>', k, v);
  }
});
