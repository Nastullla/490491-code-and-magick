'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (window.utils.isEscKey(evt) && evt.target.name !== 'username') {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.style.top = '80px';
    setup.style.left = '50%';
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKey(evt)) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKey(evt)) {
      closePopup();
    }
  });

})();
