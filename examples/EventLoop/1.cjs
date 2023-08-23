require("fs").writeFile("./test.txt", "hello", "utf8", (err) => {
  console.log("i/o");
});
setTimeout(() => {
  console.log("timeout");
}, 1);

setImmediate(() => {
  console.log("immediate");
});
