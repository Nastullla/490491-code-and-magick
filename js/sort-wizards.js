'use strict';

(function () {
  var sortWizards = function (wizards) {
    var sortedWizards = wizards.slice()
      .sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = namesComparator(left.name, right.name);
        }
        return rankDiff;
      });


    return sortedWizards;
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.changeWizard.currentCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.changeWizard.currentEyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.sortWizards = {
    sortWizards: sortWizards
  }

})();
