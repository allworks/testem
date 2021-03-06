'use strict';

function test(platform) {
  return /^win/.test(platform);
}

var currentPlatform = test(process.platform);

module.exports = function isWin(platform) {
  if (platform) {
    return test(platform);
  }

  return currentPlatform;
};
