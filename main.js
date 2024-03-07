let text = `lorem ipsum dolar sit elit amet amet`;
let searchText = text.search(`elita`);
console.log(text.search(`elita`));


let slicedText = text.slice(6); //მექვსე სიმბოლოდან შემდგომ ამოჭრის ბოლომდე
let slicedText2 = text.slice(6, 12); // მეექვსედან მეთორმეტემდე ამოჭრის
console.log(slicedText2);

let lengthText = text.length; // დაითვლის ტექსტის სიგრძეს
console.log(lengthText);

let replacedText = text.replace(`amet`, `axalisityva`); //ჩაანაცვლებს პირველ სიტყვას მეორეთი, მხოლოდ ერთხელ - პირველი რომელსაც ნახავს
console.log(replacedText);
let replacedAllText = text.replaceAll(`amet`, `axalisityva`); // ჩაანაცვლებს ყველას სადაც კი შეხვდება
console.log(replacedAllText);

let concatText = text.concat(`test`, `test`, `test`);  //კონკატონაცია აერთიანებს სტრინგებს
console.log(concatText);

let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();


let anyText = prompt(`შეიყვანეთ ტექსტი`);
console.log(word);
let word = prompt(`შეიყვანეთ საძიებო სიტყვა`);

if ()

