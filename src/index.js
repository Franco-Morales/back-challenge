import  "dotenv/config";

import { app } from "./app";
import initDatabase from "./database";

const main = async () => {
    try {

        app.listen( app.get("port"), () => {
            console.log(`Server on [ http://localhost:${ app.get("port") } ]`) 
        });

        await initDatabase();

    } catch (error) {
        console.error(error);
    }
}


main();