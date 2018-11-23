'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_FONT = 80;
var BAR_WIDTH = 40;
var HISTOGRAM_MAX_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxTime = function (times) {
  var maxTime = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = Math.round(times[i]);
    }
  }
  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 200, 1)';
  ctx.fillText('Ура вы победили!', 200, 40);
  ctx.fillText('Список результатов:', 180, 70);
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + TEXT_FONT + HISTOGRAM_MAX_HEIGHT + 3 * GAP);
  }
  for (i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'; }
     else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 25%)';
       }
    var maxTime = getMaxTime(times);
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + TEXT_FONT);
    ctx.fillRect(CLOUD_X + (FONT_GAP + BAR_WIDTH) * i + FONT_GAP, CLOUD_Y + TEXT_FONT + GAP + HISTOGRAM_MAX_HEIGHT, BAR_WIDTH, - (HISTOGRAM_MAX_HEIGHT * times[i]) / maxTime);
  }
};
