import app from "./app";
import connection from "./config/connection";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

const PORT = parseInt(process.env.PORT!) || 3000;
const start = async (): Promise<void> => {
    try {

        await connection.authenticate();
        await connection.sync();
        app.listen(PORT, () => {
            // init();
            app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error("LOADING_ERROR", error);
        process.exit(1);
    }
};

void start();