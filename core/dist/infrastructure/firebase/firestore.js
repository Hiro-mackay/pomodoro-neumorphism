"use strict";
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
exports.FireStore = void 0;
var pathSplitStrig = "/";
function pathSplit(DBPathQuery) {
    return DBPathQuery.split(pathSplitStrig);
}
var FireStore = /** @class */ (function () {
    function FireStore(app) {
        this.db = app.firestore();
    }
    FireStore.prototype.baseCollection = function (path) {
        var _coll = pathSplit(path)[0];
        return this.db.collection(_coll);
    };
    FireStore.prototype.baseDoc = function (path) {
        var _a = pathSplit(path), _coll = _a[0], _doc = _a[1];
        return this.db.collection(_coll).doc(_doc);
    };
    /**
     * Function to get the data of collection to the firestore
     *
     * @param path arams firestore path collection id
     * @param option paramas firestore get option
     */
    FireStore.prototype.getCollection = function (path, option) {
        return __awaiter(this, void 0, void 0, function () {
            var snapshot, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.baseCollection(path).get()];
                    case 1:
                        snapshot = _a.sent();
                        return [2 /*return*/, snapshot.empty
                                ? null
                                : snapshot.docs.map(function (doc) { return ({
                                    id: doc.id,
                                    data: doc.data(),
                                }); })];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Function to add new data to firestore
     *
     * @param path params firestore path collection id
     * @param query paramas data to be stored in firestore
     * @param option paramas firestore save option
     */
    FireStore.prototype.setCollection = function (path, query, option) {
        return __awaiter(this, void 0, void 0, function () {
            var ref, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.baseCollection(path).add(query)];
                    case 1:
                        ref = _a.sent();
                        return [2 /*return*/, ref.id];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Function to save the data to the firestore
     *
     * @param path params firestore path collection id or document id
     * @param query paramas data to be stored in firestore
     * @param option paramas firestore save option
     */
    FireStore.prototype.setDoc = function (path, query, option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.baseDoc(path).set(query)];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Function to save the data to the firestore
     *
     * @param path params firestore path collection id or document id
     * @param query paramas data to be stored in firestore
     * @param option paramas firestore save option
     */
    FireStore.prototype.updateDoc = function (path, query, option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.baseDoc(path).update(query)];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Function to get the data to the firestore
     *
     * @param path arams firestore path collection id or document id
     * @param option paramas firestore get option
     */
    FireStore.prototype.getDoc = function (path, option) {
        return __awaiter(this, void 0, void 0, function () {
            var snapshot, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.baseDoc(path).get()];
                    case 1:
                        snapshot = _a.sent();
                        return [2 /*return*/, snapshot.exists
                                ? {
                                    id: snapshot.id,
                                    data: snapshot.data(),
                                }
                                : null];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FireStore.prototype.deleteDoc = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.baseDoc(path).delete()];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    FireStore.prototype.subscribeDoc = function (path, setState, option) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            var unsubscribe_1 = _this.baseDoc(path).onSnapshot(function (doc) {
                                var data = {
                                    id: doc.id,
                                    data: doc.data(),
                                };
                                setState(data);
                            });
                            resolve(function () {
                                unsubscribe_1();
                            });
                        }
                        catch (err) {
                            reject(err);
                        }
                    })];
            });
        });
    };
    FireStore.prototype.subscribeCollection = function (path, setState, option) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            var unsubscribe_2 = _this.baseCollection(path).onSnapshot(function (snapshot) {
                                var data = snapshot.map(function (doc) { return ({
                                    id: doc.id,
                                    data: doc.data(),
                                }); });
                                setState(data);
                            });
                            resolve(function () {
                                unsubscribe_2();
                            });
                        }
                        catch (error) {
                            reject(error);
                        }
                    })];
            });
        });
    };
    return FireStore;
}());
exports.FireStore = FireStore;
