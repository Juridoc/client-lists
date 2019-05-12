"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
const Internals = require("../internals");
/**
 * List creation request.
 */
let Create = class Create extends Class.Null {
};
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Disposition)),
    Class.Public()
], Create.prototype, "disposition", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "title", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Number(),
    Class.Public()
], Create.prototype, "priority", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "language", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Option),
    Class.Public()
], Create.prototype, "optionList", void 0);
Create = __decorate([
    RestDB.Schema.Entity('lists'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map