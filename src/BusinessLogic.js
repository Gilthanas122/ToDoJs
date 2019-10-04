"use strict";
exports.__esModule = true;
var DataConnection_1 = require("./DataConnection");
var Task_1 = require("./entity/Task");
var BusinessLogic = /** @class */ (function () {
    function BusinessLogic() {
    }
    BusinessLogic.prototype.whatToDoWithToDo = function (userChoice) {
        if (userChoice.charAt(0) === 'a' && userChoice.length === 2) {
            this.listIt(userChoice);
        }
        else if (userChoice.charAt(0) === 'b' && userChoice.length === 2) {
            this.writeFile(userChoice);
        }
        else if (userChoice.charAt(0) === 'c' && userChoice.length === 3) {
            if (Number.isInteger(parseInt(userChoice.charAt(2)))) {
                this.removeTask(userChoice);
            }
            else {
                console.log("The parameter (third character) for removal should be a number");
            }
        }
        else if (userChoice.charAt(0) === 'd' && userChoice.length === 3) {
            this.checkTask(userChoice);
        }
        else {
            console.log("Invalid parameter");
        }
    };
    BusinessLogic.prototype.listIt = function (userChoice) {
        var dataConnection = new DataConnection_1.DataConnection();
        if (dataConnection.listToDo(userChoice).length == 0) {
            console.log("No todos");
        }
        else {
            console.log(dataConnection.listToDo(userChoice));
        }
    };
    BusinessLogic.prototype.writeFile = function (userChoice) {
        var task = this.createTask(userChoice);
        var dataConnection = new DataConnection_1.DataConnection();
        var readline = require("readline");
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter your todo text!", function (text) {
            if (text.length === 0) {
                console.log("No input provided");
                this.writeFile();
            }
            console.log("Here i am");
            var fs = require('fs');
            var fileContent = dataConnection.listToDo(userChoice);
            task.setText((fileContent.length).toString() + ". " + text + ',');
            dataConnection.saveToDo(task);
        });
    };
    BusinessLogic.prototype.removeTask = function (userChoice) {
        var task = this.createTask(userChoice);
        var dataConnection = new DataConnection_1.DataConnection();
        var position = parseInt(userChoice[userChoice.length - 1], 10);
        var fs = require('fs');
        var fileContent = dataConnection.listToDo(userChoice);
        if (fileContent.length < 2) {
            console.log("Not enough tasks to remove");
        }
        else if (fileContent.length < position) {
            console.log("Sorry, no task at the given position");
        }
        fileContent.splice(position, 1);
        for (var i = 0; i < fileContent.length; i++) {
            fileContent[i] = (i + 1).toString() + fileContent[i].substr(1) + '\n';
        }
        dataConnection.deleteToDo(userChoice, fileContent);
        console.log("Task deleted");
    };
    BusinessLogic.prototype.checkTask = function (userChoice) {
        var dataConnection = new DataConnection_1.DataConnection();
        var position = parseInt(userChoice[userChoice.length - 1], 10);
        var fs = require('fs');
        var fileContent = dataConnection.listToDo(userChoice);
        if (fileContent.length < position) {
            console.log("Sorry, no task at the given position");
        }
        else if (Number.isInteger(Number.parseInt(userChoice.charAt(2)))) {
            fileContent[position] = fileContent[position].substr(0, fileContent.length - 1) + " " + "X," + '\n';
            var task = new Task_1.Task(this.createTask(userChoice).getState(), fileContent[position].substr(2) + '\n');
            dataConnection.saveToDo(task);
            console.log("Task marked");
        }
        else {
            console.log("You used not a number, but a kaki");
        }
    };
    BusinessLogic.prototype.createTask = function (userChoice) {
        switch (userChoice.charAt(1)) {
            case "a":
                return new Task_1.Task("doing", "");
                break;
            case "b":
                return new Task_1.Task("review", "");
                break;
            case "c":
                return new Task_1.Task("done", "");
                break;
            case "d":
                return new Task_1.Task("todo", "");
                break;
        }
    };
    return BusinessLogic;
}());
exports.BusinessLogic = BusinessLogic;
