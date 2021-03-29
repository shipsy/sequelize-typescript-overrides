import { Model as TypeScriptModel } from "sequelize-typescript";
import { BaseAttributes } from "./interface";
import { ColumnBag } from "./types";
export declare abstract class DBTable<T1 = any, T2 = any> extends TypeScriptModel<T1, T2> {
    static columns: ColumnBag<BaseAttributes>;
}
export declare abstract class DBView<T1 = any, T2 = any> extends TypeScriptModel<T1, T2> {
    static columns: ColumnBag<BaseAttributes>;
}
