let calculator = {
  a: 0,
  b: 0,
  read: function (a, b) {
    this.a = a;
    this.b = b;
  },

  sum: function () {
    return this.a + this.b;
  },

  mul: function () {
    return this.a * this.b;
  },
};

console.log(calculator);
calculator.read(3, 5);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
