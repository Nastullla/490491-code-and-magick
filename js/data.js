'use strict';

(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var getRandomWizard = function () {
    return {
      name: window.utils.selectRandomItem(WIZARD_NAMES) + ' ' +
            window.utils.selectRandomItem(WIZARD_SURNAMES),
      coatColor: window.utils.selectRandomItem(WIZARD_COATCOLORS),
      eyesColor: window.utils.selectRandomItem(WIZARD_EYESCOLORS)
    };
  };

  var getWizardsList = function (count) {
    var wizards = [];
    for (var i = 0; i < count; i++) {
      wizards[i] = getRandomWizard();
    }
    return wizards;
  };

  window.data = {
    getWizardsList: getWizardsList
  };

})();
