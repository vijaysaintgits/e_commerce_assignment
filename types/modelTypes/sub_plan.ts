import { Model } from "sequelize";

class SubPlan extends Model{
    public id?: number;
    public fee!: number;
    public no_of_customers!: number;
    public createdAt?: Date;
    public updatedAt?: Date;
}

export{SubPlan};