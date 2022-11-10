var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var nextButton = document.querySelector("#next-button");
var checkButton = document.querySelector("#check-button");
var cashLable = document.querySelector(".cash-lable");
var message = document.querySelector("#error-massage");
var notes = document.querySelectorAll(".no-of-notes");
var table = document.querySelector(".change-table");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function checkBillAmount() {
  if (billAmount.value > 0) {
    nextButton.style.display = "block";
    showCash();
    hideTable();
    hideMessage();
  } else {
    hideCash();
    hideTable();
    showMsg("Please input a valid Positive Amount");
  }
}

function checkCashGiven() {
  if (cashGiven.value > 0 && billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      hideMessage();
      showTable();
    } else {
      showMsg("Do you wanna wash plates??");
    }
  } else {
    showMsg("Please input a valid Positive Amount");
  }
}

// function validateBillAndCashAmount() {
//   if (billAmount.value > 0) {
//     if (billAmount.value <= cashGiven.value) {
//       var amountToBeReturned = cashGiven.value - billAmount.value;
//       calculateChange(amountToBeReturned);
//     }
//     else{
//         showMsg("Do you wanna wash plates??");
//     }
//   }
//   else{
//     showMsg("Invalid Bill Amount!!");
//   }
// }

function calculateChange() {
  var amountToBeReturned = cashGiven.value - billAmount.value;
  for (let i = 0; i < availableNotes.length; i++) {
    var noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    notes[i].innerText = noOfNotes;
  }
}

function hideCash() {
  cashGiven.style.display = "none";
  cashLable.style.display = "none";
  checkButton.style.display = "none";
}

function showCash() {
  cashGiven.style.display = "block";
  cashLable.style.display = "block";
  checkButton.style.display = "block";
}

function hideTable() {
  table.style.display = "none";
}

function showTable() {
  table.style.display = "block";
}

function hideMessage() {
  message.style.display = "none";
}

function showMsg(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

hideMessage();
hideCash();
hideTable();
nextButton.addEventListener("click", checkBillAmount);
checkButton.addEventListener("click", checkCashGiven);
checkButton.addEventListener("click", calculateChange);
