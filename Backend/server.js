import express from 'express'; //es module
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js'
const app = express();

dotenv.config()
console.log("MONGO_URL:", process.env.MONGO_URI);
app.use("/api/v1/auth",authRoutes)

app.listen(5000, ()=>{
    console.log('server started at http://localhost:5000');
});
//G7bmNGNt7blAza3p
