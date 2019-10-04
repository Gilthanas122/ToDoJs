"use strict";
exports.__esModule = true;
var BusinessLogic_1 = require("./BusinessLogic");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.basisQuestion = function () {
        var businessLogic = new BusinessLogic_1.BusinessLogic();
        console.log("What to do with ToDos? First letter func, second letter DB, third num which to remove or modify", '\n', "a. List", '\n', "b. Add", '\n', "c. Remove", '\n', "d. Finish");
        var readline = require("readline");
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Choose the letter of the required function!", function (userChoice) {
            businessLogic.whatToDoWithToDo(userChoice);
            main.basisQuestion();
        });
        rl.on("close", function () {
            process.exit(0);
        });
    };
    return Main;
}());
exports.Main = Main;
