import "reflect-metadata";
import {createConnection} from "typeorm";
import {Task} from "./entity/Task";
import {Main} from "./Main"

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "november",
    database: "test",
    entities: [
      Task
    ],
    synchronize: true,
    logging: false
  }).then(async connection => {

    //let main = new Main();
    //main.basisQuestion();
    //let task = new Task("done", "my first task");
    //await connection.manager.save(task);
    

  }).catch(error => console.log(error));