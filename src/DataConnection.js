"use strict";
exports.__esModule = true;
var DataConnection = /** @class */ (function () {
    function DataConnection() {
    }
    DataConnection.prototype.listToDo = function (userChoice) {
        var fs = require('fs');
        switch (userChoice.charAt(1)) {
            case "a":
                var fileContent = fs.readFileSync('Resources/todo.txt', 'utf-8').split('\n');
                return fileContent;
                break;
            case "b":
                var fileContent = fs.readFileSync("Resources/doing.txt", 'utf-8').split('\n');
                return fileContent;
                break;
            case "c":
                var fileContent = fs.readFileSync('Resources/review.txt', 'utf-8').split('\n');
                return fileContent;
                break;
            case "d":
                var fileContent = fs.readFileSync('Resources/done.txt', 'utf-8').split('\n');
                return fileContent;
                break;
        }
    };
    DataConnection.prototype.saveToDo = function (task) {
        var fs = require('fs');
        switch (task.getState()) {
            case "todo":
                fs.appendFile('Resources/todo.txt', "\n" + task.getText(), function (err) {
                    if (err)
                        return console.log(err);
                });
                break;
            case "doing":
                fs.appendFile('Resources/doing.txt', "\n" + task.getText(), function (err) {
                    if (err)
                        return console.log(err);
                });
                break;
            case "review":
                fs.appendFile('Resources/review.txt', "\n" + task.getText(), function (err) {
                    if (err)
                        return console.log(err);
                });
                break;
            case "done":
                fs.appendFile('Resources/done.txt', "\n" + task.getText(), function (err) {
                    if (err)
                        return console.log(err);
                });
                break;
        }
    };
    ;
    DataConnection.prototype.deleteToDo = function (userChoice, fileContent) {
        var fs = require('fs');
        switch (userChoice.charAt(1)) {
            case "a":
                fs.writeFileSync('Resources/todo.txt', fileContent);
                break;
            case "b":
                fs.writeFileSync('Resources/doing.txt', fileContent);
                break;
            case "c":
                fs.writeFileSync('Resources/review.txt', fileContent);
                break;
            case "d":
                fs.writeFileSync('Resources/done.txt', fileContent);
                break;
        }
    };
    return DataConnection;
}());
exports.DataConnection = DataConnection;
;
