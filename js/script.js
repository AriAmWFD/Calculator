// Variables
let btn = document.querySelectorAll(".number");
let Power = document.querySelector("#Power");
let Result = document.querySelector("#Result");
let number = [];
let C = document.querySelector("#C");
let AC = document.querySelector("#AC");
let Back = document.querySelector("#Back");
let Equal = document.querySelector("#Mosavi");
let Operators = document.querySelectorAll(".op");

// codes
Power.addEventListener("click", function () {
  Result.style.backgroundColor = "#849e71";
});

C.addEventListener("click", function () {
  number = [];
  Result.innerHTML = "";
});

AC.addEventListener("click", function () {
  number = [];
  Result.innerHTML = "";
});

btn.forEach((button) => {
  button.addEventListener("click", function () {
    number.push(button.innerHTML);
    Result.innerHTML = number.join("");
  });
});

Back.addEventListener("click", function () {
  number.pop();
  Result.innerHTML = number.join("");
});

Equal.addEventListener("click", function () {
  let Quest = number.join("");
  let Answer = eval(Quest);
  Result.innerHTML = Answer;
});

Operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    number.push(operator.innerHTML);
    Result.innerHTML = number.join("");
  });
});
