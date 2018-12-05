'use strict';

(function () {

  var drawBlock = function (ctx, x, height, color, name, time) {
    ctx.fillStyle = 'black';
    ctx.fillText(name, x, 265);
    ctx.fillText(Math.round(time), x, 240 - height);

    ctx.fillStyle = color;
    ctx.fillRect(x, 250 - height, 40, height);
  };

  var drawCloud = function (ctx) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

  var renderStatistics = function (ctx, names, times) {
    drawCloud(ctx);

    var maxTime = times[0];
    for (var i = 0; i < names.length; i++) {
      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }

    var shift = 130;
    for (i = 0; i < names.length; i++) {
      var color = 'hsl(240, ' + (Math.floor(Math.random() * 101)) + '%, 50%)';
      if (names[i] === 'Вы') {
        color = 'rgba(255, 0, 0, 1)';
      }
      drawBlock(ctx, shift, Math.round(times[i] * 150 / maxTime), color, names[i], times[i]);
      shift += 90;
    }
  };

  window.stat = {
    renderStatistics: renderStatistics
  }

})();
