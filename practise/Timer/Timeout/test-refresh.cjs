const { setTimeout } = require("node:timers/promises");
const ab = new AbortController();

const s = ab.signal;
setTimeout(2000, "123").then((v) => {
  console.log(v);
});



ab.abort(s);