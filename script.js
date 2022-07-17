"use-strict";
function getGLoading(bankAngle) {
  return 1 / Math.cos(bankAngle * (Math.PI / 180));
}

function getNewStallSpeed(currentStallSpeed, gLoad) {
  return currentStallSpeed * Math.sqrt(gLoad);
}

const bankAngle = 45;
const stallSpeed = 55;
const gLoading = getGLoading(bankAngle);
const newStall = getNewStallSpeed(stallSpeed, gLoading);

console.log(
  `Your current stall speed is ${stallSpeed} and your new stall speed is ${newStall.toFixed(
    2
  )} with a bank angle of ${bankAngle}. Your G Loading is ${gLoading.toFixed(
    2
  )}g's.`
);
