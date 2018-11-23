'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilar = document.querySelector('.setup-similar');
var similarListElement = setupSimilar.querySelector('.setup-similar-list');

var selectRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizard = function () {
  return {
    name: selectRandomItem(WIZARD_NAMES) + ' ' + selectRandomItem(WIZARD_SURNAMES),
    coatColor: selectRandomItem(WIZARD_COATCOLORS),
    eyesColor: selectRandomItem(WIZARD_EYESCOLORS)
  };
};

var createWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards[i] = createWizard();
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

var wizards = createWizards(4);
renderWizards(wizards);

setupSimilar.classList.remove('hidden');
