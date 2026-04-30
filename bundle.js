"use strict";
//const firstName: string = "John";
//const lastName: string = " Wick";
//const fullName = firstName + lastName;
//console.log(fullName)
const vacationOrder = {
    nameEmployee: "Елена",
    date: "09.04.2026",
    hasFamily: true,
    daysInVacation: 14,
    package: "travel",
};
console.log(vacationOrder);
var VacationPackage;
(function (VacationPackage) {
    VacationPackage["in_city"] = "\u0432 \u0433\u043E\u0440\u043E\u0434\u0435";
    VacationPackage["country"] = "\u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0435";
    VacationPackage["travel"] = "\u0437\u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u0435\u0439";
})(VacationPackage || (VacationPackage = {}));
const getFamilyText = (hasFamily) => {
    if (hasFamily) {
        return "с семьей";
    }
    else {
        return "в одиночку";
    }
};
console.log(`Сотрудник ${vacationOrder.nameEmployee} ${getFamilyText(vacationOrder.hasFamily)} берет отпуск ${vacationOrder.date} на ${vacationOrder.daysInVacation} дней ${VacationPackage[vacationOrder.package]}.`);
const seasons = ["Зима", "Весна", "Лето", "Осень"];
console.log(seasons[3]);
