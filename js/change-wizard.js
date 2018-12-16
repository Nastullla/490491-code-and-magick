'use strict';

(function () {

  var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = setup.querySelector('input[name="coat-color"]');
  var inputEyesColor = setup.querySelector('input[name="eyes-color"]');
  var inputFireballColor = setup.querySelector('input[name="fireball-color"]');
  var formWizard = setup.querySelector('.setup-wizard-form');


  var changeElement = function (partWizard, input, array) {
    var randomColor = window.utils.selectRandomItem(array);
    input.value = randomColor;
    if (partWizard === setupFireballWrap) {
      partWizard.style.background = randomColor;
    } else {
      partWizard.style.fill = randomColor;
    }
    return randomColor;
  };

  var onCoatChange = function () {
    window.changeWizard.currentCoatColor = changeElement(wizardCoat, inputCoatColor, WIZARD_COATCOLORS);
    window.renderWizards.renderWizards(window.renderWizards.dataWizards);
  };

  var onEyesChange = function () {
    window.changeWizard.currentEyesColor = changeElement(wizardEyes, inputEyesColor, WIZARD_EYESCOLORS);
    window.renderWizards.renderWizards(window.renderWizards.dataWizards);
  };

  wizardCoat.addEventListener('click', onCoatChange);
  wizardEyes.addEventListener('click', onEyesChange);

  setupFireballWrap.addEventListener('click', function () {
    changeElement(setupFireballWrap, inputFireballColor, FIREBALLCOLORS);
  });

  var onSuccessSave = function () {
    window.utils.hideErrorMessage();
    setup.classList.add('hidden');
  };

  formWizard.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(formWizard), onSuccessSave, window.utils.onError);
    evt.preventDefault();
  });

  window.changeWizard = {
    currentCoatColor: 'rgb(101, 137, 164)',
    currentEyesColor: 'black'
  };

})();
