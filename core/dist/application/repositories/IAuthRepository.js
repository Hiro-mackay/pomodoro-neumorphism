"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAuthRepository = void 0;
var IAuthRepository = /** @class */ (function () {
    function IAuthRepository() {
    }
    return IAuthRepository;
}());
exports.IAuthRepository = IAuthRepository;
var Repository = /** @class */ (function () {
    function Repository() {
    }
    return Repository;
}());
var DataAccess = /** @class */ (function () {
    function DataAccess() {
        this.getData = function () { };
    }
    return DataAccess;
}());
// Domain.ts
var infra = new DataAccess();
infra.getData();
// DataAccessの内部実装は知らんが、getDataがあることは、
// 抽象クラスDataAccessInterfaceで定義されている
