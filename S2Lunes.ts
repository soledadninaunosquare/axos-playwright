export {};
let myName: string = "Soledad";
let isSpring: boolean = true;
let ageYuki: number = 10;
let pets: Array<string> = ["Yuki", "Xuxa", "Vaco"];
let birthdayYuki: Date = new Date(2026, 0, 18);

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
