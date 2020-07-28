"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
var Todo = /** @class */ (function () {
    function Todo(todoList) {
        this._list = __spreadArrays(todoList);
    }
    Object.defineProperty(Todo.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    Todo.prototype.add = function (todo) {
        this.updateList(__spreadArrays(this._list, [todo]));
    };
    Todo.prototype.update = function (todo) {
        var updateIndex = this._list.findIndex(function (t) { return t.id === todo.id; });
        if (updateIndex === -1) {
            this.add(todo);
        }
        else {
            this._list[updateIndex] = todo;
        }
    };
    Todo.prototype.updateList = function (todoList) {
        this._list = todoList;
    };
    Todo.prototype.remove = function (id) {
        this.updateList(this._list.filter(function (todo) { return todo.id !== id; }));
    };
    Todo.prototype.indexofId = function (id) {
        return this._list.findIndex(function (todo) { return todo.id === id; });
    };
    Todo.prototype.existsId = function (id) {
        return this.indexofId(id) !== -1;
    };
    return Todo;
}());
exports.Todo = Todo;
