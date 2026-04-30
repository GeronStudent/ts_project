"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Answer;
(function (Answer) {
    Answer["A"] = "A";
    Answer["B"] = "B";
    Answer["C"] = "C";
})(Answer || (Answer = {}));
let answer = Answer.A;
switch (answer) {
    case Answer.A:
        console.log("1 score");
    case Answer.B:
        console.log("2 score");
    case Answer.C:
        console.log("3 score");
    default:
        console.log("Неизвестный ответ");
}
