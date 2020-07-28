"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group(group) {
        this.id = group.id;
        this._member = __spreadArrays(group.member);
    }
    Object.defineProperty(Group.prototype, "member", {
        get: function () {
            return this._member;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addMember = function (user) {
        this._member = __spreadArrays(this._member, [user]);
    };
    Group.prototype.removeMember = function (id) {
        this._member = this._member.filter(function (user) { return user.id !== id; });
    };
    Group.prototype.toObj = function () {
        return {
            id: this.id,
            member: this._member,
        };
    };
    return Group;
}());
exports.Group = Group;
