const inputField = document.getElementById('inputfield');
inputField.addEventListener('input', function(event){
    let newInput= event.target.value;
let inputNewValue= newInput.replace(/[^0-9+*/.()-]/g, '');
    inputField.value= inputNewValue;
})

const buttons = document.getElementsByName('numberButton');
for (let d = 0; d < buttons.length; d++) {
buttons[d].addEventListener('click', function() {
inputField.value += buttons[d].innerText;
});
}




const output= document.getElementById('output');

const diviseur= document.querySelector('diviseur');
const multiplicateur= document.querySelector('multiplicateur');

const egalButton= document.getElementById('egalButton');
const removeButtOne= document.getElementById('removebutton');
const removeAll= document.getElementById('removeallbutton');