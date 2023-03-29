/*
let  totalShoppingCart =50;
if(totalShoppingCart >50){
  console.log("hai diritto alla spedizione gratuito");
 }else{
   console.log("l'espedizione a costa pari a 10");
 }

 
 let val = 7
 if (val < 10) {
     console.log("Meno di 10");
   } else if (val < 5) {
     console.log("Meno di 5");
   } else {
     console.log("Uguale a 10 o maggiore");
   }
  
  
   let num=10;
if(num<5){
    console.log("Timy")

}else if(num<10){
    console.log("Small")

}else if(num<15){
    console.log("Medium")

}else if(num<20){
    console.log("Large")

}else{
    console.log("huge")
}

let classeA=[{
    nome:"Marc",
    age:24,
    media:8
},
    {
     nome: "Patrick",
        age:25,
        media:12
    }
]
let classeB=[{
    nome:"Luca",
    age:22,
    media:15
},
    {
     nome: "jessica",
        age:18,
        media:7
    }
]
function chiALaMedia(students){
    for(let i=0; i< students.length;i++){
        let student=students[i]
        if(student.media>=10){
            console.log(student.nome + " é passato")
        }
    }
}
chiALaMedia(classeA)
chiALaMedia(classeB)


let day =3;
switch(day){
    case 1:
        console.log("oggi é lunedi")
        break
        case 2:
        console.log("oggi é Martedi")
        break
        case 3:
            console.log("oggi é Mercoledi")
            break
            case 4:
                console.log("oggi é jovedi")
                break
                case 5:
                    console.log("oggi é venerdi")
                    break
                    case 6:
                        console.log("oggi é sabato")
                        break
                        case 7:
                            console.log("oggi é domenica")
                            break
                            default:
                                console:log("fine settimana")

}
// for(let me=0; me<=100; me++){
//     console.log(me)
// }

for(let a = 0; a < 10; a++) {
    if(a === 3) {
        continue;
     }
     console.log(a);
    }
    let n = 1;
 while (n <=5) {
     console.log(n);
   	n++;
 }


//  let gender;

// if(isMale){
//     console.log("male")
    
//    }else{
//     console.log("female")
//    }

let isMale="gender";

console.log(gender= isMale ? "male":"female");
*/

// Assegna un valore numerico a tre variabili
let a = 10;
let b = 5;
let c = 8;

// Inizializza una variabile temporanea
let hasmap;

// Ordina le variabili dal valore più alto al più basso
if (a < b) {
  hasmap = a;
  a = b;
  b = hasmap;
}
if (a < c) {
  hasmap = a;
  a = c;
  c = hasmap;
}
if (b < c) {
  hasmap = b;
  b = c;
  c = hasmap;
}

// Stampa i valori ordinati
console.log(a, b, c);



// Definisci il valore da verificare
let val = 3.14159;

// Verifica se il valore è di tipo "number" e se è un intero
if (typeof val === "number" && val % 1 === 0) {
  console.log("Il valore è un intero");
} else {
  console.log("Il valore non è un intero");
}

// Definisci il numero da verificare
let numero = 5;

// Controlla se il numero è pari o dispari
if (numero % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

// Definisci la variabile isMale
let isMale = true;

// Assegna a gender il valore "male" se isMale è true, altrimenti "female"
let gender = isMale ? "male" : "female";

// Stampa il valore di gender
console.log(gender);



let i = 0;
// Esegui il ciclo while finché i è minore o uguale a 5
while (i <= 5) {
  console.log(i); 
  i++; 
}

// Esegui un ciclo for che parte da 0 e finisce a 10 (incluso)
for (let d = 0; d <= 10; d++) {
    if (d !== 3 && d !== 8) { // Escludi i numeri 3 e 8
      console.log(d); // Stampa il valore di i
    }
  }


  // Esegui un ciclo for che parte da 0 e finisce a 15 (incluso)
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) { // Controlla se i è pari
      console.log(i + ' è pari'); // Stampa che i è pari
    } else { // Se i non è pari, allora è dispari
      console.log(i + ' è dispari'); // Stampa che i è dispari
    }
  }


  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // Controlla se i è multiplo di 3 e di 5
      console.log('FizzBuzz'); // Stampa "FizzBuzz"
    } else if (i % 3 === 0) { // Controlla se i è multiplo di 3
      console.log('Fizz'); // Stampa "Fizz"
    } else if (i % 5 === 0) { // Controlla se i è multiplo di 5
      console.log('Buzz'); // Stampa "Buzz"
    } else { // Se non è multiplo di 3 o di 5, stampa il valore di i
      console.log(i);
    }
  }

  let num = 12;

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}