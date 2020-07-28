"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoInteractor = void 0;
var domain_1 = require("../../../domain");
var dbpath_1 = require("../../../utils/constants/dbpath");
var TodoInteractor = /** @class */ (function () {
    function TodoInteractor(TimerRepository) {
        this.todoRepository = TimerRepository;
        this._todo = null;
    }
    Object.defineProperty(TodoInteractor.prototype, "todo", {
        get: function () {
            return this._todo;
        },
        enumerable: false,
        configurable: true
    });
    TodoInteractor.prototype.existsTodo = function () {
        return this._todo !== null;
    };
    TodoInteractor.prototype.generator = function (todo) {
        var _a;
        if (this.existsTodo()) {
            (_a = this._todo) === null || _a === void 0 ? void 0 : _a.add(__assign({}, todo));
        }
        else {
            this._todo = new domain_1.Todo([todo]);
        }
    };
    TodoInteractor.prototype.fetch = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var todoList, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.todoRepository.fetch(id)];
                    case 1:
                        todoList = _a.sent();
                        if (todoList === null) {
                            return [2 /*return*/, null];
                        }
                        else {
                            this._todo = new domain_1.Todo(todoList);
                            return [2 /*return*/, this.todo];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodoInteractor.prototype.add = function (ownerId, taskTitle, pom, project, status) {
        if (pom === void 0) { pom = 0; }
        if (project === void 0) { project = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _todo, createdTodo, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _todo = {
                            title: taskTitle,
                            expectedPomo: pom,
                            excutedPomo: 0,
                            status: status,
                            beginAt: new Date(),
                            endAt: null,
                            project: project,
                        };
                        return [4 /*yield*/, this.todoRepository.create(dbpath_1.userPathQuery(ownerId), _todo)];
                    case 1:
                        createdTodo = _a.sent();
                        this.generator(createdTodo);
                        return [2 /*return*/, this.todo];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodoInteractor.prototype.delete = function (todoId, ownerId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var deleteTodoPath, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        deleteTodoPath = dbpath_1.todoPathQuery(todoId);
                        if (!(this.existsTodo() && ((_a = this._todo) === null || _a === void 0 ? void 0 : _a.existsId(todoId)))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.todoRepository.delete(dbpath_1.userPathQuery(ownerId) + "/" + deleteTodoPath)];
                    case 1:
                        _c.sent();
                        (_b = this._todo) === null || _b === void 0 ? void 0 : _b.remove(todoId);
                        _c.label = 2;
                    case 2: return [2 /*return*/, this.todo];
                    case 3:
                        error_3 = _c.sent();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TodoInteractor.prototype.update = function (todo) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var updateTodoId, updateTodoPath, updatedTodo, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        updateTodoId = todo.id;
                        updateTodoPath = dbpath_1.todoPathQuery(updateTodoId);
                        if (!(this.existsTodo() && ((_a = this._todo) === null || _a === void 0 ? void 0 : _a.existsId(updateTodoId)))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.todoRepository.update(updateTodoPath, todo)];
                    case 1:
                        updatedTodo = _c.sent();
                        (_b = this._todo) === null || _b === void 0 ? void 0 : _b.update(updatedTodo);
                        _c.label = 2;
                    case 2: return [2 /*return*/, this.todo];
                    case 3:
                        error_4 = _c.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return TodoInteractor;
}());
exports.TodoInteractor = TodoInteractor;
