'use strict';
var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURENAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго','Ирвинг']
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)' ]
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBERS_WIZARD = 4;

var getNewWizard = function (WIZARD_NAMES, WIZARD_SURENAMES, COAT_COLOR, EYES_COLOR) {
   for (var i = 0; i < this.length ; i++) {
   var wizardName = Math.floor(Math.random()* WIZARD_NAMES.lenght);
   var wizardSurename = Math.floor(Math.random()* WIZARD_SURENAMES.lenght);
   var wizardCoatColor = Math.floor(Math.random()* COAT_COLOR.lenght);
   var eyesColor = Math.floor(Math.random()* EYES_COLOR.lenght);
 }

 var wizard = {};
      wizard.name = getNewWizard(wizardName[i] + '' + wizardSurename[i] + '');
      wizard.coatColor = getNewWizard(wizardCoatColor[i]);
      wizard.eyes = getNewWizard(eyesColor[i]);

var silimarWizards = [];
  for (var i = 0; i < this.NUMBERS_WIZARD ; i++) {
   var silimarWizards = silimarWizards ['wizard' + i];
}


var renderWizard = function (wizard){
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

}
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < silimarWizards.length; i++) {
  similarListElement.appendChild(renderWizard(silimarWizards[i]));
}
  var setupSilimar = document.querySelector('.setup-similar');
  setupSilimar.classList.remove('hidden');
