import "reflect-metadata";
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { type } from "os";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;
    @Column("text")
    private text: String;
    @Column("text")
    private state: String;

    constructor(state: String, text: String) {
        this.state = state;
        this.text = text;
    }

    getText(): String {
        return this.text;
    }
    setText(value: String) {
        this.text = value;
    }

    getState(): String {
        return this.state;
    }
    setState(value: String) {
        this.state = value;
    }
}
