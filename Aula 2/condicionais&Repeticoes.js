
// Operadores Aritimétricos

// + - * / %

// Lógicos

// < > <= >= = = =

// Quando tem 2 iguais, compara o apenas o dado;
// Quando tem 3, compara o tipo e o dado;

// = =
// = = =

// for

let num = 5;

for (let i = 0; i < num; i++) {
    i++; // sempre conta +1
    
    i = i + 1; // 1, 2 ,3
    i += 1; // 1, 2 ,3
}

//Outras formas de utilizar uma estrutura de repetição

let arr = ['banana', 'maça', 'limão'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// arr.forEach(item => {
//     console.log(item);
// });

// for (i in arr) {
//     console.log(arr[i]);
// };

// Do and doWhile

let i = 0;
while (i <= num) {
    i++;
    // console.log('While');
}

i = 0;
do {
    i++;
    // console.log("doWhile")
} while (i <= 5);


// if e else and switch

let idade = 18;

if (idade >= 18) {
    // console.log("Pode dirigir")
} else if(idade == 17) {
    // console.log("Pode começar o processo no Detran");
} else {
    // console.log("Não pode dirigir");
}

switch (idade) {
    case 18:
        // console.log("Pode dirigir")
        break
    case 17: 
        // console.log("Pode começar o processo no Detran")
        break
    default:
        // console.log("Não pode dirigir")
        break
    
}