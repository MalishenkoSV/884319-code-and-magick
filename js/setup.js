'use strict';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBERS_WIZARD = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
// Файл random-interval.js
(function () {
  var getRandomIntegerFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  window.getRandomIntegerFromInterval = getRandomIntegerFromInterval;
})();

// Файл random-element.js
(function () {
  var getRandomElementFromArray = function (arr) {
    return arr[window.getRandomIntegerFromInterval(0, arr.length - 1)];
  };
  window.getRandomElementFromArray = getRandomElementFromArray;
})();

// Файл wizard-object.js
(function () {
  var createWizard = function () {
    var wizardObject = {
      name: window.getRandomElementFromArray(WIZARD_NAMES) + ' ' + window.getRandomElementFromArray(WIZARD_SURNAMES),
      coatColor: window.getRandomElementFromArray(COAT_COLORS),
      eyes: window.getRandomElementFromArray(EYES_COLORS)
    };
    return wizardObject;
  };
  var wizards = [];
  for (var i = 0; i < NUMBERS_WIZARD; i++) {
    var wizard = createWizard();
    wizards.push(wizard);
  }
  window.wizards = wizards;
})();

// Файл similar-wizards.js
(function () {
  var similarTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizardClone = function (wizardOriginal) {
    var wizardCloneElement = similarTemplate.cloneNode(true);
    wizardCloneElement.querySelector('.setup-similar-label').textContent = wizardOriginal.name;
    wizardCloneElement.querySelector('.wizard-coat').style.fill = wizardOriginal.coatColor;
    wizardCloneElement.querySelector('.wizard-eyes').style.fill = wizardOriginal.eyes;
    return wizardCloneElement;
  };
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < window.wizards.length; j++) {
    var element = renderWizardClone(window.wizards[j]);
    fragment.appendChild(element);
  }
  window.fragment = fragment;

  var similarListElement = document.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
})();

// Файл popup-class.js
(function () {
  var openSetupPopup = document.querySelector('.setup-open');
  var closeSetupPopup = document.querySelector('.setup-close');
  var userName = document.querySelector('.setup-user-name');
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };
  var openPopup = function () {
    setup.classList.remove('hidden');
  };
  var closePopup = function () {
    setup.classList.add('hidden');
  };
  openSetupPopup.addEventListener('click', function () {
    openPopup();
    document.addEventListener('keydown', onPopupEscPress);
  });
  userName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });
  userName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });
  openSetupPopup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });
  closeSetupPopup.addEventListener('click', function () {
    closePopup();
  });
  closeSetupPopup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  coat.addEventListener('click', function () {
    var color = window.getRandomElementFromArray(COAT_COLORS);
    coat.style.fill = color;
  });
  var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
  eyesWizard.addEventListener('click', function () {
    var eyes = window.getRandomElementFromArray(EYES_COLORS);
    eyesWizard.style.fill = eyes;
  });
  var fireballWizard = document.querySelector('.setup-fireball-wrap');
  fireballWizard.addEventListener('click', function () {
    var fireball = window.getRandomElementFromArray(FIREBALL_COLORS);
    fireballWizard.style.background = fireball;
  });
})();

// Файл dialog.js
(function () {
  var setupDialogElement = setup.querySelector('.setup-user-pic');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (dragged) {
        var onClickPreventDefault = function () {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
