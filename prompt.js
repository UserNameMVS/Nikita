// Создаем массив со словами
var words = ['программа', 'макака', 'прекрасный', 'оладушек', 'домик', 'городок', 'столица'];
// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}
var remainingLetters = word.length;
// Игровой цикл
var number = remainingLetters + 3;
while (remainingLetters > 0) {
  if (number === 0) {
    alert('Количество попыток закончилось - Вы проиграли!');
    break;
  }
  // Показываем состояние игры
  alert(answerArray.join(' '));
  // Запрашиваем вариант ответа

  var guess = prompt(
    'Угадайте букву или нажмите "Отмена" для выхода из игры. У Вас есть ' + number + ' попыток!'
  );
  guess.toLowerCase();
    
  if (guess === null) {
    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одиночную букву.');
  } else {
    var isLetter = false;
    for (var k = 0; k < answerArray.length; k++) {
      if (answerArray[k] === guess && !isLetter) {
        isLetter = true;
        alert('Буква "' + guess + '" уже была!');
      }
    }
    if (!isLetter) {
      number--;
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }
  }
  // Обновляем состояние игры
  // Конец игрового цикла
}
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(' '));
if (number > 0) {
  alert('Отлично! Было загадано слово ' + word);
}
