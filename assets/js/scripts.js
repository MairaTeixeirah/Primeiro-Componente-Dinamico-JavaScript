const btnsubtrair$ = document.getElementById("subtrair");
const btnadicionar$ = document.getElementById("adicionar");
const currentNumberWrapper = document.getElementById("currentNumber");

let currentNumber = 0

currentNumberWrapper.innerHTML = currentNumber;

btnadicionar$.addEventListener("click", function() {
    if (currentNumber < 10){
        currentNumberWrapper.innerHTML = ++currentNumber;
    }
    if (currentNumber > 0){
        currentNumberWrapper.style.color = 'black';
    }
});

btnsubtrair$.addEventListener("click", function(){
    currentNumberWrapper.innerHTML = --currentNumber;
    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
});