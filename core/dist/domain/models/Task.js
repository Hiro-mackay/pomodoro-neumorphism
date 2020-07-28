"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.expectedPomo = todo.expectedPomo;
        this.excutedPomo = todo.excutedPomo;
        this.status = todo.status;
        this.beginAt = todo.beginAt;
        this.endAt = todo.endAt;
        this.project = todo.project;
        this.ownerId = todo.ownerId;
    }
    Task.prototype.update = function (todo) {
        if (todo.id === this.id) {
            this.id = todo.id;
            this.title = todo.title;
            this.expectedPomo = todo.expectedPomo;
            this.excutedPomo = todo.excutedPomo;
            this.status = todo.status;
            this.beginAt = todo.beginAt;
            this.endAt = todo.endAt;
            this.project = todo.project;
        }
    };
    Task.prototype.toObj = function () {
        return {
            id: this.id,
            title: this.title,
            expectedPomo: this.expectedPomo,
            excutedPomo: this.excutedPomo,
            status: this.status,
            beginAt: this.beginAt,
            endAt: this.endAt,
            project: this.project,
            ownerId: this.ownerId,
        };
    };
    return Task;
}());
exports.Task = Task;
