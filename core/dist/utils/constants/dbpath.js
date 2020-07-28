"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoPathQuery = exports.userPathQuery = exports.timerPathQuery = void 0;
exports.timerPathQuery = function (userId) {
    return "users/" + userId;
};
exports.userPathQuery = function (userId) {
    return "users/" + userId;
};
exports.todoPathQuery = function (todoId) {
    return "todo/" + todoId;
};
