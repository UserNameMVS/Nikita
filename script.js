// var age = 1;
// var accompanied = true;

// function entry () {
//   if(age >=12 || accompanied) {
//     console.log("Вход разрешен")
//   } else {
//     console.log("Вход ЗАПРЕЩЕН!!!")
//   }
// }

// entry();
// var myTopThreeDinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр"];
// console.log(myTopThreeDinosaurs)
// var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
// var scalyAnimals = ["Удав", "Годзилла"];
// var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// console.log(furryAndScalyAnimals);

// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса", "крот"];
// // Выбор случайной части тела из массива randomBodyParts:
// var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// // Выбор случайного прилагательного из массива randomAdjectives:
// var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
//  // Выбор случайного слова из массива randomWords:
// var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// // Соединяем случайные строки в предложение:
// // "У тебя " + randomBodyPart + " еще более " + randomAdjective + ", чем " + randomBodyPart + " у " + randomWord;
// var randomInsult = ["У тебя", randomBodyPart, "еще более", randomAdjective, ", чем", randomBodyPart, "у", randomWord];
// // randomInsult.join(" ");
// // console.log(randomInsult.join(" "));

// var a = [3, 2, 1];
// // var arr = [a[0] + " больше,", "чем " + a[1] + " больше,", "чем " + a[2]];
// // arr = arr.join(" ");
// var str = `${a[0]} больше, чем ${a[1]} больше, чем ${a[2]}`;
// console.log(str);

// var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
// var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
// var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

// var friends = [anna, dave, kate];

// console.log(friends[1]);

// console.log(friends[2]['luckyNumbers'][2]);
// console.log(friends[2].luckyNumbers[2]);
// Представьте, что вы играете в какую-нибудь игру со своими друзьями и вам нужно вести счет. Создайте для этого объект и назовите
// его scores. Пусть ключами будут имена ваших друзей, а значениями — набранные ими очки (0 или больше). Счет игроков надо
// будет увеличивать по мере того, как они зарабатывают новые
// очки. Как вы будете менять счет игрока, хранящийся в объекте
// scores?
// var scores = {};

// scores.Oleg = 0;
// scores.Aleksandr = 0;
// scores.Anna = 0;

// console.log(scores.Oleg += 0 + 7 + 4 );
// console.log(scores.Anna += 8 + 9 + 2 );
// console.log(scores.Aleksandr += 3 + 6 + 5 );
// console.log(scores);
// var myCrazyObject = {
// "name": "Нелепый объект",
// "some array": [7, 9, { purpose: "путаница", number: 803 }, 3.3],
// "random animal": "Банановая акула"
// };
// console.log( myCrazyObject["some array"][2].number );

// var add = function (number1, number2) {
//   return number1 + number2;
// };
// var multiply = function (number1, number2) {
//   return number1 * number2;
// };
// console.log(add(multiply(36325, 9824), 777));

// var areArraysSamevar = function (array1,array2) {
// return array1 === array2;
// };
// console.log(areArraysSamevar ([1, 2, 3], [4, 5, 6]));
var words = ['программа', 'макака', 'прекрасный', 'оладушек', 'домик', 'городок', 'столица'];

var pickWord = function () {
  return words[Math.floor(Math.random() * words.length)];
};
var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  return answerArray;
};
var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(' '));
};
var getGuess = function () {
  var guess = prompt('Угадайте букву или нажмите "Отмена" для выхода из игры.');
  return guess.toLowerCase();
};
var updateGameState = function (guess, word, answerArray) {
  // Обновляет answerArray согласно ответу игрока (guess)
  var countLetter = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      countLetter++;
    }
  }

  return countLetter;
  // возвращает число, обозначающее, сколько раз буква guess
  // встречается в слове, чтобы можно было обновить значение
  // remainingLetters
};
var showAnswerAndCongratulatePlayer = function (answerArray) {
  // С помощью alert показывает игроку отгаданное слово
  // и поздравляет его с победой
  alert(answerArray.join(' '));
  alert('Отлично! Было загадано слово ' + word);
};

var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  // guess: ответ игрока
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одиночную букву.');
  } else {
    // correctGuesses: количество открытых букв
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);
