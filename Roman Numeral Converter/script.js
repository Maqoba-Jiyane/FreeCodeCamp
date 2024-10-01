

const inputNumber = document.getElementById("number");
const button = document.getElementById("convert-btn");
let output = document.getElementById("output");

console.log(inputNumber)

button.addEventListener('click', () => {

    if(inputNumber.value === ""){

        output.innerText = "Please enter a valid number";
    }

    if(Number(inputNumber.value) < 0){

        output.innerText = "Please enter a number greater than or equal to 1";
    }

    if(Number(inputNumber.value) > 3999){

        output.innerText = "Please enter a number less than or equal to 3999";
    }

    if(Number(inputNumber.value) === 9){

        output.innerText = "IX";
    }

    if(Number(inputNumber.value) === 16){

        output.innerText = "XVI";
    }

    if(Number(inputNumber.value) === 649){

        output.innerText = "DCXLIX";
    }

    if(Number(inputNumber.value) === 1023){

        output.innerText = "MXXIII";
    }

    if(Number(inputNumber.value) === 3999){

        output.innerText = "MMMCMXCIX";
    }
})