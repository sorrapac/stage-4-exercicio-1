/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [x]  A soma dos dois números;
- [x]  A subtração dos dois números;
- [x]  A multiplicação dos dois números;
- [x]  A divisão dos dois números;
- [x]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar?

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).
*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber
const even = (sum % 2) === 0
const equal = firstNumber === secondNumber

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${multi}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${restDiv}`)

if(even) {
    alert(`A soma dos dois números é par: ${sum}`)
} else {
    alert(`A soma dos dois números é ímpar: ${sum}`)
}

if(equal) {
    alert(`Os dois números são iguais: ${firstNumber} e ${secondNumber}`)
} else {
    alert(`Os dois números são diferentes: ${firstNumber} e ${secondNumber}`)
}