
// Crie um script que receba 3 números e retorne o maior deles.

function retornaMaior(num1, num2, num3) {
    let maior;

    if (num1 > num2 && num1 > num3) {
        maior = num1;
    }
    
    if (num2 > num1 && num2 > num3) {
        maior = num2;
    }
    
    maior = 3;

    // console.log(maior)
} 

// retornaMaior(3, 2, 1);

// Crie um contador que incremente de 1 até 100 e imprima os múlƟplos de 3 e
// 5.
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
};