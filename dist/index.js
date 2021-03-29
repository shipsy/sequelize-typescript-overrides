"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = exports.Table = exports.DBView = exports.DBTable = exports.Sequelize = void 0;
var sequelize_1 = require("./sequelize");
Object.defineProperty(exports, "Sequelize", { enumerable: true, get: function () { return sequelize_1.Sequelize; } });
var model_1 = require("./model");
Object.defineProperty(exports, "DBTable", { enumerable: true, get: function () { return model_1.DBTable; } });
Object.defineProperty(exports, "DBView", { enumerable: true, get: function () { return model_1.DBView; } });
var decorator_1 = require("./decorator");
Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return decorator_1.Table; } });
Object.defineProperty(exports, "View", { enumerable: true, get: function () { return decorator_1.View; } });
//# sourceMappingURL=index.js.map