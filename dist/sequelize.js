"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const model_1 = require("./model");
class Sequelize extends sequelize_typescript_1.Sequelize {
    constructor(...args) {
        var _a;
        super(...args);
        (_a = this.options.models) === null || _a === void 0 ? void 0 : _a.forEach(model => {
            const ModelClass = this.model(model);
            const columns = Object.keys(ModelClass.rawAttributes);
            ModelClass.columns = {};
            columns.forEach(col => {
                var _a, _b;
                const attribute = ModelClass.rawAttributes[col];
                if (ModelClass.prototype instanceof model_1.DBView) {
                }
                if (ModelClass.prototype instanceof model_1.DBTable) {
                }
                ModelClass.columns[col] = {
                    'forSelect': `${ModelClass.tableName}.${(_a = attribute.field) !== null && _a !== void 0 ? _a : col}`,
                    'forAs': (_b = attribute.field) !== null && _b !== void 0 ? _b : col
                };
            });
        });
    }
    model(model) {
        return super.model(model);
    }
}
exports.Sequelize = Sequelize;
//# sourceMappingURL=sequelize.js.map