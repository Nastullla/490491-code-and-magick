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

  var hideErrorMessage = function () {
    var errorMessageElement = document.querySelector('.error-message');
    if (errorMessageElement) {
      errorMessageElement.classList.add('hidden');
    }
  };

  var createErrorMessage = function () {
    var node = document.createElement('div');
    node.classList.add('error-message');
    node.classList.add('hidden');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    document.body.insertAdjacentElement('afterbegin', node);
  };

  var onError = function (errorMessage) {
    var errorMessageElement = document.querySelector('.error-message');
    if (!errorMessageElement) {
      createErrorMessage();
    }

    errorMessageElement = document.querySelector('.error-message');
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.remove('hidden');
  };

  var DEBOUNCE_INTERVAL = 500; // ms

  var debounce = function (cb) {
    var lastTimeout = null;

    return function() {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function() {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.utils = {
    keyCode: keyCodes,
    selectRandomItem: selectRandomItem,
    isEscKey: isEscKey,
    isEnterKey: isEnterKey,
    onError: onError,
    hideErrorMessage: hideErrorMessage,
    debounce: debounce
  };

})();
