'use strict';

(function () {
  var keycodes = {
    esc: 27,
    enter: 13,
  };

  var selectRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.util = {
    keycode: keycodes,
    selectRandomItem: selectRandomItem
  };

})();
