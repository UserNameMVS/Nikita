var counter = 1;
var printMessage = function () {
  console.log('Ты смотришь в консоль уже ' + counter + ' сек');
  counter++;
};
var intervalId = setInterval(printMessage, 5000);
