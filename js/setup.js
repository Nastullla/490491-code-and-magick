'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setupWindow = document.querySelector('.setup');

var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilar = document.querySelector('.setup-similar');
var SIMILAR_LIST_ELEMENT = setupSimilar.querySelector('.setup-similar-list');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var selectRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizard = function () {
  return {
    name: selectRandomItem(WIZARD_NAMES) + ' ' + selectRandomItem(WIZARD_SURNAMES),
    coatColor: selectRandomItem(WIZARD_COATCOLORS),
    eyesColor: selectRandomItem(WIZARD_EYESCOLORS)
  };
};

var getWizardsList = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards[i] = getRandomWizard();
  }
  return wizards;
};

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

var wizards = getWizardsList(4);
renderWizardsList(wizards);

setupSimilar.classList.remove('hidden');

/* -------------------------------------------------------- */

var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target.name !== 'username') {
    closePopup();
  }
};

var openPopup = function() {
  setupWindow.style.top = '80px';
  setupWindow.style.left = '50%';
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

/* ------------------------ */

var setup = document.querySelector('.setup');
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length === 0) {
    target.setCustomValidity('Обязательное поле');
  } else if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

/* ------------------------ */

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var inputCoatColor = setup.querySelector('input[name="coat-color"]');
var inputEyesColor = setup.querySelector('input[name="eyes-color"]');
var inputFireballColor = setup.querySelector('input[name="fireball-color"]');

var changeElement = function (partWizard, input, array) {
  var randomColor = selectRandomItem(array);
  input.value = randomColor;
  if (partWizard === setupFireballWrap) {
    partWizard.style.background = randomColor;
  } else {
    partWizard.style.fill = randomColor;
  }
}

wizardCoat.addEventListener('click', function () {
  changeElement(wizardCoat, inputCoatColor, WIZARD_COATCOLORS);
});

wizardEyes.addEventListener('click', function () {
  changeElement(wizardEyes, inputEyesColor, WIZARD_EYESCOLORS);
});

setupFireballWrap.addEventListener('click', function () {
  changeElement(setupFireballWrap, inputFireballColor, FIREBALLCOLORS);
});
