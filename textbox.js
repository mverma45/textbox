
let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('textArea');

btnClear.addEventListener('click',()=>{
inputs.forEach(textArea => textArea.value='');
});
