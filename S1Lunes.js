let myName = "Soledad";
let isSpring = true;
let ageYuki = 10;
let pets = ["Yuki", "Xuxa", "Vaco"];
let birthdayYuki = new Date(2026,0,18);

console.log(myName);
console.log(isSpring);
console.log(ageYuki);
console.log(pets);
console.log(
  birthdayYuki.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }),
);
