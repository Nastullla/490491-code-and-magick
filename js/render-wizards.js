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

  var renderWizards = function (wizards) {
    var sortedWizards = window.sortWizards.sortWizards(wizards);

    SIMILAR_LIST_ELEMENT.innerHTML = '';
    for (var i = 0; i < 4; i++) {
      SIMILAR_LIST_ELEMENT.appendChild(renderWizard(sortedWizards[i]));
    }

    setupSimilar.classList.remove('hidden');
  };

  var onSuccessLoad = function (wizards) {
    window.renderWizards.dataWizards = wizards;
    window.utils.hideErrorMessage();
    renderWizards(wizards);
  };

  window.backend.load(onSuccessLoad, window.utils.onError);

  window.renderWizards = {
    renderWizards: renderWizards
  };

})();
