import { TableColumnInterface } from "./interface";
import { DBTable, DBView } from "./model";

export type ColumnBag<T> = { [K in keyof T]: TableColumnInterface }

export type DBTableCtor<M extends DBTable = DBTable> = (new () => M) & typeof DBTable;
export type DBViewCtor<M extends DBView = DBView> = (new () => M) & typeof DBView;