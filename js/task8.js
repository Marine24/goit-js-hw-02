"use strict";

const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (isLoginUnique(allLogins, login)) {
    return "Такой логин уже используется!";
  } else {
    allLogins.push(login);
    return "Логин успешно добавлен!";
  }
}

console.log(addLogin(allLogins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(allLogins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(allLogins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(allLogins, "jqueryisextremelyfast"));
