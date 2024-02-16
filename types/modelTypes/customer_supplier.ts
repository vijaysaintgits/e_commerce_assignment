import { Model } from "sequelize";

class cust_supp extends Model{
    public id?: number;
    public customer_id!: number;
    public supplier_id!: number;
    public status!:string
    public createdAt?: Date;
    public updatedAt?: Date;
}

export {cust_supp};