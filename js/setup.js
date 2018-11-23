'use strict';
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var similarListElement = setup.querySelector('.setup-similar-list');
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURENAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBERS_WIZARD = 4;

var getRandomIntegerFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getRandomElementFromArray = function () {
  var randomIndexName = getRandomIntegerFromInterval(0, WIZARD_NAMES.length - 1);
  var randomIndexSureName = getRandomIntegerFromInterval(0, WIZARD_SURENAMES.length - 1);
  var randomIndexColor = getRandomIntegerFromInterval(0, COAT_COLOR.length - 1);
  var randomIndexEyesColor = getRandomIntegerFromInterval(0, EYES_COLOR.length - 1);
};
var createWizard = function () {
  var wizard = {
    name: getRandomElementFromArray(WIZARD_NAMES[randomIndexName] + '' + WIZARD_SURENAMES[randomIndexSureName] + ''),
    coatColor: getRandomElementFromArray(COAT_COLOR[randomIndexColor]),
    eyes: getRandomElementFromArray(EYES_COLOR[randomIndexEyesColor])
  };
  return wizard;
};
var silimarWizards = [];
for (var i = 0; i < NUMBERS_WIZARD; i++) {
  createWizard(wizard);
  silimarWizards.push(wizard());
}
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var j = 0; j < silimarWizards.length; j++) {
  fragment.appendChild(renderWizard(silimarWizards[j]));
  wizardElement.appendChild(fragment);
}
var setupSilimar = document.querySelector('.setup-similar');
setupSilimar.classList.remove('hidden');
