import {neon} from "@neondatabase/serverless";
import "dotenv/config"

export const db = neon(process.env.DATABASE_URL,);

export default db;