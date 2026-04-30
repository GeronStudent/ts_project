//const firstName: string = "John";
//const lastName: string = " Wick";
//const fullName = firstName + lastName;
//console.log(fullName)

//const quantity: number = 37
// console.log(age)
// const fullName1 = firstName + age
// console.log(fullName1)

// const firstName2: string = "My name is"
// const name: string = " Lena"
// const fullName2 = firstName2 + name
// console.log(fullName2)

//console.log("МЕНЯ ЗОВУТ " + fullName)

//const age2: number = 25
//console.log("мой возраст: " + age2)

//console.log(`Моё имя: ${fullName}`)

//console.log(`удвоенный возраст: ${age * 2}`)

//console.log(`Прошу предоставить мне отпуск на ${quantity + 5} дня`)

//let numbers: boolean = 5 <= 5

//console.log(numbers)

//let num1: number = 5
//let num2: number = 10
// let numbers: boolean = num1

//let height: number = 148
// if(height > 150) {
//     console.log (`Вы проходите :)! И можете кататься на аттракционе!`)
// }
// else if (height > 140){

//     console.log (`Вы не можете кататься на аттрационе, но мы можем предложить Вам другой вариант!`)
// }
// else {
//     console.log(`Вы не можете кататься на аттракционе ((`)
// }

//let price: number = 14000
// if(price > 15999) {
//     console.log(`Вам предлагается бесплатная доставка.`)
// }
// else {
//     console.log(`Общая сумма доставки составит ${price + 1500}.`)
// }

// function myName() {

//  console.log(`Мое имя Сэм`)
// }
// myName()

// function myName1(name: string) {

//     console.log(`Мое имя ${name}`)
//    }
//    myName1("Veronika")
//    myName1("Daniil")
//    myName1("Kosmos")

//    создать функцию, которая принимает два аргумента высоты и ширины и выводит периметр и площадь

// let h = 5
// let w = 6
// function calc(h: number, w: number) {
//     console.log(`Perimeter equals ${(h+w)*2}`)
//     console.log(`Square is ${h*w}`)
// }

// calc(15,20)
// calc(h,w)

// let name = "Lena";
// let totalSum = 124000;
// let year = 2;

// function a(Uname: string, totalSum: number, year: number) {}
// if (totalSum > 100000) {
//   console.log("У Вас постоянная скидка на товары 5%");
// } else if (totalSum > 200000) {
//   console.log("У вас постоянная скидка 10%");
// } else if (totalSum > 500000) {
//   console.log("У Вас потсоянная скидка 15%");
// } else {
//   console.log("У Вас нет скидок.");
// }

// if (year >= 1) {
//   console.log("Вам купон на 5000 тенге (на товары без акции");
// } else if (year >= 3) {
//   console.log("вам купон на 7500 тенге (на товары без акции");
// } else if (year >= 5) {
//   console.log("Вам купон на 10000 тенге (на товары без акции");
// } else {
//   console.log("у вас нет купонов");
// }
// if (totalSum > 100000 && year >= 1) {
//   console.log(`${name}, благодарим за использование нашего магазина!`);
// } else {
//   console.log(`спасибо`);
// }
// a("Alina", 130000, 6);
// a("Alina", 130000, 6);

// enum Answer {
//   A = "A",
//   B = "B",
//   C = "C",
// }

// let answer: Answer = Answer.A as Answer;

// switch (answer) {
//   case Answer.A:
//     console.log("1 score");
//     break;

//   case Answer.B:
//     console.log("2 score");
//     break;

//   case Answer.C:
//     console.log("3 score");
//     break;
//   default:
//     console.log("Неизвестный ответ");
// }

// enum DayOfTheWeek {
//   Monday = "Monday",
//   Tuesday = "Tuesday",
//   Wednesday = "Wednesday",
//   Thursday = "Thursday",
//   Friday = "Friday",
//   Saturday = "Saturday",
//   Sunday = "Sunday",
// }

// let dayOfTheWeek: DayOfTheWeek = DayOfTheWeek.Sunday as DayOfTheWeek;

// switch (dayOfTheWeek) {
//   case DayOfTheWeek.Monday:
//     console.log("Рабочий день");
//     break;

//   case DayOfTheWeek.Tuesday:
//     console.log("Рабочий день");
//     break;

//   case DayOfTheWeek.Wednesday:
//     console.log("Рабочий день");
//     break;

//   case DayOfTheWeek.Thursday:
//     console.log("Рабочий день");
//     break;

//   case DayOfTheWeek.Friday:
//     console.log("Рабочий день");
//     break;

//   case DayOfTheWeek.Saturday:
//     console.log("Выходной день");
//     break;

//   case DayOfTheWeek.Sunday:
//     console.log("Выходной день");
//     break;

//   default:
//     console.log("Неизвестный ответ");
// }

// enum Operation {
//   add = "+",
//   subtract = "-",
//   multiply = "*",
//   divide = "/",
// }

// function calculate(num1: number, num2: number, op: string) {
//   switch (op) {
//     case Operation.add:
//       console.log(num1 + num2);
//       break;
//     case Operation.subtract:
//       console.log(num1 - num2);
//       break;
//     case Operation.multiply:
//       console.log(num1 * num2);
//       break;
//     case Operation.divide:
//       console.log(num1 / num2);
//       break;
//     default:
//       console.log("Unknown operation");
//   }
// }

// calculate(3, 4, Operation.add);

type TCompany = {
  income: string;
  employees: number;
  retired: number;
  newEmployees: number;
};

// const CarCompany: TCompany = {
//   income: "3.2M",
//   employees: 416,
//   retired: 60,
//   newEmployees: 45,
// };

// console.log(CarCompany)

// CarCompany.employees = 645
// CarCompany.retired = 60
// CarCompany.newEmployees = 54

// console.log(CarCompany)

// type TDaysInVacation = 7 | 14;

// type TVacationPackage = "in_city" | "country" | "travel";

// type TVacationOrder = {
//   nameEmployee: string;
//   date: string;
//   hasFamily: boolean;
//   daysInVacation: TDaysInVacation;
//   package: TVacationPackage;
// };

// const vacationOrder: TVacationOrder = {
//   nameEmployee: "Елена",
//   date: "09.04.2026",
//   hasFamily: true,
//   daysInVacation: 14,
//   package: "travel",
// };

// console.log(vacationOrder);

// enum VacationPackage {
//   in_city = "в городе",
//   country = "по стране",
//   travel = "за границей",
// }

// const getFamilyText = (hasFamily: boolean) => {
//   if (hasFamily) {
//     return "с семьей";
//   } else {
//     return "в одиночку";
//   }
// };

// console.log(
//   `Сотрудник ${vacationOrder.nameEmployee} ${getFamilyText(vacationOrder.hasFamily)} берет отпуск ${vacationOrder.date} на ${vacationOrder.daysInVacation} дней ${VacationPackage[vacationOrder.package]}.`,
// );

// const seasons: String[] = ["Зима", "Весна", "Лето", "Осень"];

// console.log(seasons[3]);

// console.log("Я файл geron")

// type TPersonSkill = {
//   exp: number;
//   peoples: number;
//   rating: number;
// }

// type TDepartment = {
//   trading: TPersonSkill;
//   lawyers: TPersonSkill;

// };

// const department: TDepartment = {
// trading: {
// exp: 10,
// peoples: 230,
// rating: 7.2,
// },
// lawyers: {
//   exp:15,
//   peoples: 4568,
//   rating: 1.5,
// },
// }

// console.log(Object.entries(department))

// const entrDepartments = Object.entries(department);
// let sumRating = 0;
// entrDepartments.forEach (([key, department]) => {
//   sumRating += department.rating;
// });
// console.log(`Средний рейтинг отделов ${sumRating /entrDepartments.length}`)

// let person;
// console.log(person);

// let person1: null = null;
// console.log(person1
// )

// const hello = "Привет"

export const hello = "Привет, я файл geron.ts";