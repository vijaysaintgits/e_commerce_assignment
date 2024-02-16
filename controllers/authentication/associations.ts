import EcCustomers  from "../../src/models/ec_customers";
import EcSuppliers from "../../src/models/ec_suppliers";
import { cust_supp } from "../../types/modelTypes/customer_supplier";

const associate = () =>{
    EcSuppliers.hasMany(cust_supp,{foreignKey:"supplier_id",sourceKey:"registartion_id"});
    cust_supp.belongsTo(EcSuppliers,{foreignKey:"supplier_id",targetKey:"registration_id"}) 
    EcCustomers.hasMany(cust_supp,{foreignKey:"customer_id",sourceKey:"registartion_id"});
    cust_supp.belongsTo(EcCustomers,{foreignKey:"customer_id",targetKey:"registration_id"}) 
}

export default associate;