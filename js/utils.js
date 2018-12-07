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

  var removeErrorMessage = function () {
    var errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  };

  var onError = function (errorMessage) {
    removeErrorMessage();
    var node = document.createElement('div');
    node.classList.add('error-message');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.utils = {
    keyCode: keyCodes,
    selectRandomItem: selectRandomItem,
    isEscKey: isEscKey,
    isEnterKey: isEnterKey,
    onError: onError,
    removeErrorMessage: removeErrorMessage
  };

})();
