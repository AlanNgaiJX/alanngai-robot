// 定时鼠标移动
const robot = require("robotjs");
const jsUtils = require("alanngai-js-utils");
// Speed up the mouse.
robot.setMouseDelay(2);

const p1 = [100, 100];
const p2 = [110, 110];
let count = 0;
setInterval(() => {
  let currP = count % 2 === 0 ? p1 : p2;
  robot.moveMouse(...currP);
  count++;
}, 1000);

console.log(`starting at ${jsUtils.formatDateInPattern(new Date().getTime())}`);