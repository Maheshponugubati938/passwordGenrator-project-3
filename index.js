
let pass =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=/";
let inputData = document.querySelector('.pass-data');
let genBtn = document.querySelector('.gen')
let capital = document.querySelector('#capital')
let small = document.querySelector('#small')
let digit = document.querySelector('#digit')
let special = document.querySelector('#special')
let copy = document.querySelector('.copy');
let copyText = document.querySelector('.copyText');

let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let digits = "1234567890";
let specialChars = "!@#$%^&*()/";






genBtn.addEventListener("click", ()=>{
  let charPool = "";

  if(capital.checked){
    charPool += capitalLetters;
  }

  if(small.checked){
    charPool += smallLetters
  }

  if(digit.checked){
    charPool += digits
  }

  if(special.checked){
    charPool += specialChars
  }

  if(charPool === ""){
    inputData.value = " * select alteast one box..."
    return;
  }

  

  let password = "";
  for(let i = 0; i < 8; i++){
    let genratepass = Math.floor(Math.random() * charPool.length);
    password += charPool[genratepass];
  }

  inputData.value = password;
})

let reset = document.querySelector(".reset")
reset.addEventListener("click", ()=>{
  if(inputData.value !== ""){
    inputData.value = "";
    capital.checked = false;
    small.checked = false;
    digit.checked = false;
    special.checked = false;
  }
  
})

const copiedText = ()=>{
  
  
  copyText.style.visibility = "visible";
  setTimeout(()=>{
    inputData.value = "";
    copyText.style.visibility = "hidden"
  },300)

  
}
copy.addEventListener("click", copiedText)