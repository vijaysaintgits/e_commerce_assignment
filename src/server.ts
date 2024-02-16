import express,{Express,NextFunction,Request,Response} from 'express';
import { sequelize } from './config/sequelize-config'; 
import indexRoutes from "./routes/index";
import supplierRoutes from "./routes/supplierRoutes"
import adminRouter from './routes/createPlanRoutes';
import { connectToMongoDb,stopMongoDb } from './services/mongodb';
import productRouter from './routes/productRoute';
import cors from 'cors';
import customerRoutes from './routes/customerRoutes';

const app:Express = express();
const PORT = 3000 || process.env.PORT;
const checkValue = "ownerHere";

connectToMongoDb();
app.use(express.json())

const corsOptions = {
    origin:"http://localhost:8080",
    methods:"GET"
}
app.use(cors(corsOptions));
app.use('/api/v1',indexRoutes);
app.use('/api/v2',supplierRoutes);
app.use('/api/v3',adminRouter);
app.use('/api/v4',productRouter)
app.use('/api/v5',customerRoutes)

sequelize.sync({force:false}) //set force to true to drop and recreate tables on every application start
.then(()=>{
    console.error('Database Synced');
})
.catch((error:any)=>{
    console.error('error syncing database',error);
});


app.listen(PORT,()=>console.log("listening...."));

process.on('SIGINT',async()=>{
    await sequelize.close();
    await stopMongoDb();
    process.exit();
});

process.on('exit',async()=>{
    await sequelize.close();
    await stopMongoDb();
});

