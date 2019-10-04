"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Task = /** @class */ (function () {
    function Task(state, text) {
        this.state = state;
        this.text = text;
    }
    Task.prototype.getText = function () {
        return this.text;
    };
    Task.prototype.setText = function (value) {
        this.text = value;
    };
    Task.prototype.getState = function () {
        return this.state;
    };
    Task.prototype.setState = function (value) {
        this.state = value;
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Task.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Task.prototype, "text");
    __decorate([
        typeorm_1.Column()
    ], Task.prototype, "state");
    Task = __decorate([
        typeorm_1.Entity()
    ], Task);
    return Task;
}());
exports.Task = Task;
