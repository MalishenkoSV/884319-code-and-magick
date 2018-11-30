'use strict';
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
document.querySelector('.setup').classList.remove('hidden');

var similarListElement = setup.querySelector('.setup-similar-list');

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBERS_WIZARD = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var getRandomIntegerFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getRandomElementFromArray = function (arr) {
  return arr[getRandomIntegerFromInterval(0, arr.length - 1)];

};
var createWizard = function () {
  var wizardObject = {
    name: getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_SURNAMES),
    coatColor: getRandomElementFromArray(COAT_COLORS),
    eyes: getRandomElementFromArray(EYES_COLORS)
  };
  return wizardObject;
};
var similarWizards = [];
for (var i = 0; i < NUMBERS_WIZARD; i++) {
  var wizard = createWizard();
  similarWizards.push(wizard);
}
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizardObject) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardObject.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardObject.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardObject.eyes;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var j = 0; j < similarWizards.length; j++) {
  fragment.appendChild(renderWizard(similarWizards[j]));
  similarListElement.appendChild(fragment);
}

var openSetupPopup = document.querySelector('.setup-open');
var closeSetupPopup = document.querySelector('.setup-close');

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
  document.addEventListener('keydown', function () {
    onPopupEscPress();
  });
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
coat.closeSetupPopup.addEventListener('click', function () {
  getRandomElementFromArray(COAT_COLORS);
});
var eyes = document.querySelector('.setup-wizard .wizard-eyes');
eyes.closeSetupPopup.addEventListener('click', function () {
  getRandomElementFromArray(EYES_COLORS);
});
var fireball = document.querySelector('.setup-fireball-wrap');
fireball.closeSetupPopup.addEventListener('click', function () {
  getRandomElementFromArray(EYES_COLORS);
});
