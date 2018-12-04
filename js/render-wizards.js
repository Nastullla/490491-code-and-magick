'use strict';

(function () {

  var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilar = document.querySelector('.setup-similar');
  var SIMILAR_LIST_ELEMENT = setupSimilar.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var renderWizardsList = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    SIMILAR_LIST_ELEMENT.appendChild(fragment);
  };

  var wizards = window.getWizardsList(4);
  renderWizardsList(wizards);

  setupSimilar.classList.remove('hidden');

})();
