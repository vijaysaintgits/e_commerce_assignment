import { Request, Response } from 'express';
import EcSuppliers from "../../src/models/ec_suppliers";
import EcCustomers  from '../../src/models/ec_customers';
import SuperAdmin  from '../../src/models/super_admin';

const registration = async(req:Request,res:Response): Promise<any> =>{
    try {
        const {full_name,e_mail,password,profile_pic,user_type} = req.body;

        if(!full_name || !e_mail || !password || !user_type){
            res.status(422).json("Some fields are empty");
        }
       

        if(user_type === 'supplier'){

            const newSupplier = await EcSuppliers.create({

                full_name : full_name,
                e_mail : e_mail,
                password : password,
                profile_pic : profile_pic,
    
            },{raw:true})
            return res.status(200).json(`The new supplier registration id is ${newSupplier.dataValues.registration_id}`);

        }

        if(user_type === 'customer'){

            const newCustomer = await EcCustomers.create({

                full_name : full_name,
                e_mail : e_mail,
                password : password,
                profile_pic : profile_pic,
    
            },{raw:true})
            return res.status(200).json(`The new customer registration id is ${newCustomer.dataValues.registration_id}`);

        }

        if(user_type === 'superadmin'){

            const newSuperAdmin = await SuperAdmin.create({

                full_name : full_name,
                e_mail : e_mail,
                password : password,
                profile_pic : profile_pic,
    
            },{raw:true})
            return res.status(200).json(`The new admin registration id is ${newSuperAdmin.dataValues.registration_id}`);

        }

        }

    catch(error:any){

        return res.status(401).json(`There is an error ${error}`);
    }
}

export default registration;