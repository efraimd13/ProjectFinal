//Array
let nilai = [90,80,75,95,85];

for (let i=0;i<nilai.length; i++){
    console.log("Nilai = ", nilai[i]+5);
}



console.log(nilai);





// nilai [2] = 90;
// console.log(nilai(nilai.length - 1));

let john = ["John", "Doe", 33, true];
console.log(john[john.length-1]);
console.log(john);

//toString()
console.log(john.toString);
//join()
console.log(john.join (" - "));


//pop()
john.pop();
console.log(john.join (" - "));
//push()
john.push(true);
john.push("Hello");
console.log(john.join (" - "));

//shift
john.shift();
console.log(john.join (" - "));

//unshift()
john.unshift("John");
john.unshift("Prof");
console.log(john.join (" - "));

let buah = ["Apel", "Jeruk", "Sewo", "Mangga"];
buah.splice(4, 0, "Pepaya", "Anggur");
console.log(buah);

let jaja = ["Anjay", "Anjayni", "Anjir"];
let jiji = ["Valor", "Sapi", "Rant"];
let juju = ["WoW", "WaW", "WiW"];

let jojo = jaja.concat(jiji, juju);
console.log(jojo);


let hp = ["Samsung", "Iphone", "Nokia", "Sony", "Realme"];

let china = hp.slice(1, 2);
let chinaHP = hp.slice(4);

console.log(hp);
console.log(china);
console.log(chinaHP);



hp.sort();
console.log(hp);

jaja.reverse();
console.log(jaja);




















