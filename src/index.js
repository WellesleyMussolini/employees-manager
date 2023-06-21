// import app from "./app.js";
// import ip from "ip";
// import dotenv from "dotenv";

// dotenv.config();

// const protocol = process.env.PROTOCOL || "http";
// const address = ip.address();
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log("Compiled successfully!");
//     console.log("You can now view your app in the browser.");
//     console.log(`Local:            "http://localhost:${port}"`);
//     console.log(`On Your Network:  "${protocol}://${address}:${port}"`);
// });

import app from "./app.js";
import ip from "ip";
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
    const protocol = process.env.PROTOCOL || "http";
    const address = ip.address();
    const port = process.env.PORT ? Number(process.env.PORT) : 3000;

    await new Promise((resolve, reject) => {
        app.listen({
            host: '0.0.0.0',
            port: port,
        }, (err) => {
            if (err) {
                reject(err);
            } else {
                console.log("HTTP Server Running");
                resolve();
            }
        });
    });

    console.log("Compiled successfully!");
    console.log("You can now view your app in the browser.");
    console.log(`Local:            "http://localhost:${port}"`);
    console.log(`On Your Network:  "${protocol}://${address}:${port}"`);
};

startServer().catch((error) => {
    console.error("Failed to start server:", error);
});