import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import EcSuppliers from "../../src/models/ec_suppliers";
import { EcCustomers } from '../../types/modelTypes/ec_customers';
import { SuperAdmin } from '../../types/modelTypes/super_admin';

const login = async (req: Request, res: Response): Promise<Response<any, Record<string, { message: string; } | { token: string; user_type: string; registration_id: string; }>>> => {
    try {
        const { e_mail,password,user_type } = req.body;

        if (!password || !e_mail || !user_type) {
            return res.status(422).json({ message: "Some fields are empty" });
        }

        if (user_type === 'supplier' || user_type === 'Supplier') {
            const checkResult = await EcSuppliers.findOne({ where: { e_mail: e_mail } });
            console.log(checkResult);
            if (checkResult && bcrypt.compareSync(password, checkResult.password)) {
                if (checkResult !== null) {
                    const token = jwt.sign({ userId: checkResult.registration_id, user_type: user_type },
                        "encryp", { expiresIn: '24h' }
                    );
                    return res.status(200).json({ message: `the registration id is ${checkResult.registration_id}`, token: token });
                }
            }
        }

        if (user_type === 'customer' || user_type === 'Customer') {
            const checkResult = await EcCustomers.findOne({ where: { e_mail: e_mail } });
            console.log(checkResult);
            if (checkResult && bcrypt.compareSync(password, checkResult.password)) {
                if (checkResult !== null) {
                    const token = jwt.sign({ userId: checkResult.registration_id, user_type: user_type },
                        "encryp", { expiresIn: '24h' }
                    );
                    return res.status(200).json({ message: `the registration id is ${checkResult.registration_id}`, token: token });
                }
            }
        }

        if (user_type === 'superadmin' || user_type === 'SuperAdmin') {
            const checkResult = await SuperAdmin.findOne({ where: { e_mail: e_mail } });
            console.log(checkResult);
            if (checkResult && bcrypt.compareSync(password, checkResult.password)) {
                if (checkResult !== null) {
                    const token = jwt.sign({ userId: checkResult.registration_id, user_type: user_type },
                        "encryp", { expiresIn: '24h' }
                    );
                    return res.status(200).json({ message: `the registration id is ${checkResult.registration_id}`, token: token });
                }
            }
        }
        return res.status(401).json({ message: "Invalid credentials" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default login;

