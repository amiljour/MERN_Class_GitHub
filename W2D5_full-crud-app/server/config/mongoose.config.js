import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect(DB_name) {
    try {
        await connect(MONGODB_URI, {
            dbName: DB_name,
        });
        console.log(`📡📡📡 Pinged your deployment. connected to ${DB_name} DB!`);
    } catch (error) {
        console.log("❌❌❌❌ DB ERROR", error);
        throw error;
    }
}
export default dbConnect;