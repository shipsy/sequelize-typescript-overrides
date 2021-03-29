import { Model as TypeScriptModel } from "sequelize-typescript";
import { BaseAttributes } from "./interface";
import { ColumnBag } from "./types";

/**
 * Abstract class form which all Tables will be derived
 */
export abstract class DBTable<T1 = any, T2 = any> extends TypeScriptModel<T1, T2>{

    /**
     * This will contain all names for all fields of derived class
     * We will override this property in base class
     */
    static columns: ColumnBag<BaseAttributes>
}

/**
 * Abstract class form which all Tables will be derived
 */
export abstract class DBView<T1 = any, T2 = any> extends TypeScriptModel<T1, T2>{
    
    /**
     * This will contain all names for all fields of derived class
     * We will override this property in base class
     */
    static columns: ColumnBag<BaseAttributes>
}