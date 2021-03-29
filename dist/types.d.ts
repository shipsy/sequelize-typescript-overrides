import { TableColumnInterface } from "./interface";
import { DBTable, DBView } from "./model";
export declare type ColumnBag<T> = {
    [K in keyof T]: TableColumnInterface;
};
export declare type DBTableCtor<M extends DBTable = DBTable> = (new () => M) & typeof DBTable;
export declare type DBViewCtor<M extends DBView = DBView> = (new () => M) & typeof DBView;
