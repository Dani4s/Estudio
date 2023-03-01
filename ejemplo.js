//This is a code that simulates an ATM which gives the highest bills first and the lowest last.

//My money in the ATM
var myMoney = 3000;

//cashier tickets
var tickets = {
  one: 23,
  two: 12,
  five: 3,
  ten: 13,
  twenty: 12,
  fifty: 14,
  oneHundred: 12
};

function Givemoney(withdrawal) {
  if (myMoney > withdrawal) {
    myMoney -= withdrawal;
    console.log(myMoney + " este es el dinero que te queda");
  } else {
    alert("not money");
  }
}

function moneyTeller() {
  var allMoney =
    1 * tickets.one +
    2 * tickets.two +
    5 * tickets.five +
    10 * tickets.ten +
    20 * tickets.twenty +
    50 * tickets.fifty +
    100 * tickets.oneHundred;
  console.log(allMoney + " este es el dinero inicial del cajero");
}

function giveTickets(money) {
  var giveDolar = Givemoney(money);
  var moneyDelivered = 0;

  while (money / 100 >= 1 && moneyDelivered < money && tickets.oneHundred > 0 && moneyDelivered + 100 <= money) {
    tickets.oneHundred--;
    moneyDelivered += 100;
    console.log("billetes de 100");
  }

  while (money / 50 >= 1 && moneyDelivered < money && tickets.fifty > 0 && moneyDelivered + 50 <= money) {
    tickets.fifty--;
    moneyDelivered += 50;
    console.log("billetes de 50");
  }

  while (money / 20 >= 1 && moneyDelivered < money && tickets.twenty > 0 && moneyDelivered + 20 <= money) {
    tickets.twenty--;
    moneyDelivered += 20;
    console.log("billetes de 20");
  }

  while (money / 10 >= 1 && moneyDelivered < money && tickets.ten > 0 && moneyDelivered + 10 <= money) {
    tickets.ten--;
    moneyDelivered += 10;
    console.log("billetes de 10");
  }
  while (money / 5 >= 1 && moneyDelivered < money && tickets.five > 0 && moneyDelivered + 5 <= money) {
    tickets.five--;
    moneyDelivered += 5;
    console.log("billetes de 5");
  }
  while (money / 2 >= 1 && moneyDelivered < money && tickets.two > 0 && moneyDelivered + 2 <= money) {
    tickets.two--;
    moneyDelivered += 2;
    console.log("billetes de 2");
  }

  while (money / 1 >= 1 && moneyDelivered < money && tickets.one > 0 && moneyDelivered + 1 <= money) {
    tickets.one--;
    moneyDelivered += 1;
    console.log("billetes de 1");
  }

  if (moneyDelivered == money) {
    console.log("Su dinero fue entregado")
  }}

  var button = document.getElementById("button");
  button.addEventListener("click",function() { giveTickets(2777); });




