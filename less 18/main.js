// let text = `lorem ipsum dolar sit elit amet amet`;
// let searchText = text.search(`sitdf`);
// console.log(text.search(searchText));
// console.log(searchText);

// let slicedText = text.slice(6); //მექვსე სიმბოლოდან შემდგომ ამოჭრის ბოლომდე
// let slicedText2 = text.slice(6, 12); // მეექვსედან მეთორმეტემდე ამოჭრის
// console.log(slicedText2);

// let lengthText = text.length; // დაითვლის ტექსტის სიგრძეს
// console.log(lengthText);

// let replacedText = text.replace(`amet`, `axalisityva`); //ჩაანაცვლებს პირველ სიტყვას მეორეთი, მხოლოდ ერთხელ - პირველი რომელსაც ნახავს
// console.log(replacedText);
// let replacedAllText = text.replaceAll(`amet`, `axalisityva`); // ჩაანაცვლებს ყველას სადაც კი შეხვდება
// console.log(replacedAllText);

// let concatText = text.concat(`test`, `test`, `test`);  //კონკატონაცია აერთიანებს სტრინგებს
// console.log(concatText);

// let upperCaseText = text.toUpperCase();
// let lowerCaseText = text.toLowerCase();

// მომხარებელს შემოაქვს რაღაც ტექსტი და საძიებო სიტყვა,
//   თუ საძიებო სიტყვა მოიძებნა რაღაც ტექსტში გამოგვაქვს დიალოგური შეტყობინება,
//   რომ ტექტი შეიცავს საძებო სიტყვას ხოლო თუ არ შეიცავს გამოგვაქვს, რომ არ შეიცავს.
//   თუ შეიცავს მაშინ მომხარებელს კიდევ ერთი დიალოგური ფანჯარა გამოვუტანოთ, რომ
//   შემოიყვანოს კიდევ ერთი ტექსტი, ძველ ტექსტში საძიებო სიტყვას შეცვალეთ ახალი სიტყვით
//   მაგ: 1) "test rame test" "test" "abc" -> "abc rame test"

let anyText = prompt(`შეიყვანეთ ტექსტი`);
console.log(anyText);
let word = prompt(`შეიყვანეთ საძიებო სიტყვა`);
let searchResult = anyText.search(word);

if (searchResult > 0 ){
    let newWord = prompt(`შეიყვანეთ ახალი სიტყვა`);
    anyText = anyText.replaceAll(`${word}`, `${newWord}`);
    console.log(`${anyText}`);
    // console.log(`ტექსტი შეიცავს სიტვა - ${word} -ს`);
}
else{
    console.log(`ტექსტი არ შეიცავს სიტყვა - ${word} -ს`);
}

