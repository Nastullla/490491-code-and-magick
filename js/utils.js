'use strict';

(function () {
  var keyCodes = {
    esc: 27,
    enter: 13,
  };

  var selectRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var isEscKey = function (evt) {
    return evt.keyCode === keyCodes.esc;
  };

  var isEnterKey = function (evt) {
    return evt.keyCode === keyCodes.enter;
  };

  window.utils = {
    keyCode: keyCodes,
    selectRandomItem: selectRandomItem,
    isEscKey: isEscKey,
    isEnterKey: isEnterKey
  };

})();
