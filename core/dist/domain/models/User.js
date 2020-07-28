"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var Timer_1 = require("./Timer");
var Task_1 = require("./Task");
var User = /** @class */ (function () {
    function User(user, groupBy, task, timer) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.groupBy = groupBy ? groupBy : null;
        this.timer = timer ? new Timer_1.Timer(timer) : null;
        this.task = task ? new Task_1.Task(task) : null;
    }
    User.prototype.toObj = function () {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            groupBy: this.groupBy,
            task: this.task ? this.task.toObj() : null,
            timer: this.timer ? this.timer.toObj() : null,
        };
    };
    return User;
}());
exports.User = User;
