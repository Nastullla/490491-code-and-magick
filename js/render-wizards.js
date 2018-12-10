'use strict';

(function () {

  var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilar = document.querySelector('.setup-similar');
  var SIMILAR_LIST_ELEMENT = setupSimilar.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var onSuccessLoad = function (wizards) {
    window.utils.hideErrorMessage();
    var fragment = document.createDocumentFragment();
    var j;

    for (var i = 0; i < 4; i++) {
      j = Math.floor(Math.random() * wizards.length);
      fragment.appendChild(renderWizard(wizards[j]));
      wizards.splice(j, 1);
    }

    SIMILAR_LIST_ELEMENT.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };

  window.backend.load(onSuccessLoad, window.utils.onError);

})();
