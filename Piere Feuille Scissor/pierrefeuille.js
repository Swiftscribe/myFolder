const paperImage= document.getElementById('paperImg');
const scissorImage= document.getElementById('paperScissor');
const rockImage= document.getElementById('paperRock');

const myinput1=document.getElementById('input1');
const myinput2= document.getElementById('input2');
const myinput3=document.getElementById('input3');

paperImage.addEventListener('click', function() {
    paperImage.style.border = '2px solid black';
    paperImage.style.backgroundColor = 'yellow';
});
