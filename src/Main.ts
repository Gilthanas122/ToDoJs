import "reflect-metadata";
import { Task } from "./entity/Task";
import { BusinessLogic } from "./BusinessLogic";
import { DataConnection } from "./DataConnection";

export class Main {

    public basisQuestion() {
        let businessLogic = new BusinessLogic();
        console.log("What to do with ToDos? First letter func, second letter DB, third num which to remove or modify", '\n', "a. List", '\n', "b. Add", '\n', "c. Remove", '\n', "d. Finish");
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Choose the letter of the required function!", function (userChoice) {
            businessLogic.whatToDoWithToDo(userChoice)
        });

        rl.on("close", function () {
            process.exit(0);
        });

    }

}
