function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    var userInput = prompt('Введите число:', '0');
    var number = parseFloat(userInput);
    if (!isNaN(number)) {
      this.value += number;
    } else {
      alert('Вы ввели некорректное число. Попробуйте ещё раз.');
    }
  };
}

var accumulator = new Accumulator(0);
while (true) {
  accumulator.read();
  console.log('Текущее значение: ' + accumulator.value);
}
