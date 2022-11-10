var billAmount = document.querySelector("#biil-amount");
var cashGiven = document.querySelector("#cash-given");
var nextButton=document.querySelector("#next-button");
var checkButton = document.querySelector("#check-button");
var cashLable=document.querySelector(".cash-lable");
var message = document.querySelector("#error-massage");
var noOfNotes = document.querySelector(".no-of-notes");
var table =document.querySelector(".change-table")

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

// function checkBillAmount(){
//     if(billAmount.value>0){
//         nextButton.style.display="block";
//         showCash();
//         hideTable();
//         hideMessage();      
//     }
//     else{
//         hideCash();
//         hideTable();
//         showMsg("Please input a valid Positive Amount");
//     }
// }





// function checkCashGiven(){
//     if(cashGiven.value>0 && billAmount.value>0){
//         if(cashGiven.value>=billAmount.value){
//            hideMessage();
//            showTable();
//         }
//         else{
//             showMsg("Do you wanna wash plates??");
//         }
//       }
//       else{
//         showMsg("Please input a valid Positive Amount");
//       }
//     }

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





// function calculateChange() {
//     var amountToBeReturned = cashGiven.value - billAmount.value;
//     for (let i = 0; i < availableNotes.length; i++) {

//     var noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
//     amountToBeReturned %= availableNotes[i];
//     noOfNotes[i].innerText = noOfNotes;

//   }
// }

// function hideCash(){
//     cashGiven.style.display="none";
//     cashLable.style.display="none";
//     checkButton.style.display="none";
// }

// function showCash(){
//     cashGiven.style.display="block";
//     cashLable.style.display="block";
//     checkButton.style.display="block";
// }

// function hideTable(){
//     table.style.display="none";
// }

// function showTable(){
//     table.style.display="block";
// }

// function hideMessage() {
//   message.style.display = "none";
// }

// function showMsg(msg){
//     massage.style.display="block";
//     massage.innerText=msg;
// }


// hideMessage();
// hideCash();
// hideTable();

// nextButton.addEventListenr("click", checkBillAmount);
// checkButton.addEventListenr("click", checkCashGiven);
// checkButton.addEventListener("click",calculateChange);




hideMessage();
hideCash();
hideTable();
nextButton.addEventListener("click", nextHandler);
checkButton.addEventListener("click", clickHandler);

function nextHandler() {
  if (billAmount.value > 0) {
    nextButton.style.display = "none";
    showCash();
    hideMessage();
  } else {
    showMessage("Amount should be greater than zero!");
  }
}

function clickHandler() {
  hideMessage();
  if (billAmount.value > 0 && cashGiven.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      returnBalance.innerText = "Rs. " + amountToBeReturned;
      calculateChange(amountToBeReturned);
      showTable();
    } else {
      showMessage("Do you wanna wash dishes?");
    }
  } else {
    showMessage("Amount should be greater than zero!");
  }
}

checkButton.addEventListener("click", clickHandler);

function calculateChange(amount) {
  for (i = 0; i < availableNotes.length; i++) {
    const numberofNotes = Math.trunc(amount / availableNotes[i]);
    amount %= availableNotes[i];
    noOfNotes[i].innerText = numberofNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
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