/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name == null) {
    print(`Name should not be null`);
    return false;
  } else if (name.length < 4) {
    print(`Name should have at least 4 symbols length`);
    return false;
  } else if (name.includes(' ')) {
    print(`Name should not contain spaces`);
    return false;
  } 
  return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
