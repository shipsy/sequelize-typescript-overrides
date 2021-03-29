import { Sequelize as TypeScriptSequelize, SequelizeOptions } from "sequelize-typescript";
import { DBTableCtor, DBViewCtor } from "./types";
export declare class Sequelize extends TypeScriptSequelize {
    constructor(database: string, username: string, password?: string, options?: SequelizeOptions);
    constructor(database: string, username: string, options?: SequelizeOptions);
    constructor(options?: SequelizeOptions);
    constructor(uri: string, options?: SequelizeOptions);
    model(model: any): DBTableCtor | DBViewCtor;
}
