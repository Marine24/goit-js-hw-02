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
    alert("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (isLoginUnique(allLogins, login)) {
    alert("Такой логин уже используется!");
  } else {
    allLogins.push(login);
    alert("Логин успешно добавлен!");
  }
}

addLogin(allLogins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(allLogins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(allLogins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(allLogins, "jqueryisextremelyfast");
