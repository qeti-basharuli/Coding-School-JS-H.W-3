"use strict";

// 1. მოცემულია მასივი:

let array2 = [14, 150, "css", null, "javascript", 25];

// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით:
// თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი;
// თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით;
// სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let newArray2 = array2.map(function (item) {
  if (typeof item === "number") {
    return item * item;
  } else if (typeof item === "string") {
    return item.toUpperCase();
  }
  return item;
});

console.log(newArray2);

// 2. მოცემულია სტრინგი:

let info = "good day";

// ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.

let infoSlice = info.slice(5, 8);
console.log(infoSlice);

// 3. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

// 4. prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა:
//    საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში.
//    როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს.
//    თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

let userAnswer = prompt("საქართველოს დედაქალაქი");
let answer = "Tbilisi";

let lowAnswer = userAnswer.toLocaleLowerCase();

if (lowAnswer === answer) {
  console.log("სწორია");
} else {
  console.log("არასწორია");
}

// 5. მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10.
//    splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”.

let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(2, 1, "strawberry");
console.log(fruits);

// 6. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
//    მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//    მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//    გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//    წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

let array = [5, 25, 89, 120, 36];

array.push("javascript", "python");
array.unshift("html", "css");
array.shift();
array.pop();
console.log(array);

let numberElements = array.length;
console.log(numberElements);

// 7. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, კივი;
//    გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//    მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//    მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//    გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//    მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//    წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//    გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let arrayFruits = ["ფორთოხალი", "ბანანი", "კივი"];

let fruitsLength = arrayFruits.length;
console.log(fruitsLength);

arrayFruits.push("ვაშლი", "ანანასი");
arrayFruits.unshift("საზამთრო");
arrayFruits.splice(2, 0, "მანგო");
arrayFruits.shift();
arrayFruits.pop();
console.log(arrayFruits);

let numberOfFruits = arrayFruits.length;
console.log(numberOfFruits);

// 8. მოცემულია მასივი: // splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a", "b", "c");
console.log(array3);

// 9. მოცემულია მასივი: let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
//    map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray5 = array5.map(function (element) {
  return element / 3;
});
console.log(newArray5);

// 10. მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]; წაშალეთ ამ მასივიდან რიცხვი 10;

let array7 = [15, 100, 25, 10, 36];

array7.splice(3, 1);
console.log(array7);

// 11. მოცემულია მასივი:  let array8 = [1, 2, 3 , 4 , 5]; მეთოდის საშუალებით 3-ის მაგივრად ჩასვით სიტყვა three;

let array8 = [1, 2, 3, 4, 5];

array8.splice(2, 1, "three");
console.log(array8);

// 12. მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”];
//     გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;

let array1 = ["hello1", 14, 24, "hello2"];

let filterArrayNew = array1.filter((items) => typeof items == "number");
console.log(filterArrayNew);

// 13. მოცემულია მასივი: let array4 = [1, 2, 3, 4, 5];
//     foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

let array4 = [1, 2, 3, 4, 5];

let sum = 0;

array4.forEach(function (number) {
  return (sum += number);
});

console.log(sum);

// 14. მოცემულია მასივი: let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
//     ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ["html", "css", "javascript", "python", "php"];

let languagesNew = languages.filter((items2) => items2.length > 3);
console.log(languagesNew);

// 15. მოცემულია მასივი: let words = ['Madrid', 'rome', 'Milan', 'berlin'];
//     filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ["Madrid", "rome", "Milan", "berlin"];

let wordsNew = words.filter((items3) => {
  return items3.includes("m") || items3.includes("M");
});

console.log(wordsNew);
