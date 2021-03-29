import { Sequelize as TypeScriptSequelize, SequelizeOptions } from "sequelize-typescript";
import { Transaction } from "sequelize";
import { TableColumnInterface } from "./interface";
import { DBTable, DBView } from "./model";
import { DBTableCtor, DBViewCtor } from "./types";

export class Sequelize extends TypeScriptSequelize {

    constructor(database: string, username: string, password?: string, options?: SequelizeOptions);
    constructor(database: string, username: string, options?: SequelizeOptions);
    constructor(options?: SequelizeOptions);
    constructor(uri: string, options?: SequelizeOptions);
    constructor(...args: any[]) {
        super(...args)

        // Options now have been initalised
        // So operate on models
        this.options.models?.forEach(model => {

            // Get Model class to access static property
            const ModelClass = this.model(model)

            // Get registered columns for this model
            const columns = Object.keys(ModelClass.rawAttributes)

            // Delete all fields
            ModelClass.columns = {}

            // For each column, add entry to field 
            columns.forEach(col => {
                const attribute = ModelClass.rawAttributes[col]

                // Check if Model class is view or table
                if(ModelClass.prototype instanceof DBView){
                    // View specific implementation
                }
    
                if(ModelClass.prototype instanceof DBTable){
                    // Table specific implementation
                }

                // For table, store property name as TableColumnInterface
                ModelClass.columns[col] = {
                    'forSelect': `${ModelClass.tableName}.${attribute.field ?? col}`,
                    'forAs': attribute.field ?? col
                } as TableColumnInterface
                
            })
        })
    }

    // This will return Table
    model(model: any): DBTableCtor | DBViewCtor {
        return super.model(model) as DBTableCtor | DBViewCtor;
    }

    async beginTransaction(isolationLevel?: Transaction.ISOLATION_LEVELS): Promise<Transaction>{
        return this.transaction({ isolationLevel })
    }
}