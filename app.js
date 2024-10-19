const express = require("express");
require("dotenv").config();
const app = express();
require("./src/db/dbConnection.js");

const router = require("./src/routers/auth.routes.js"); // Auth router'ı içe aktar

const port = process.env.PORT || 5001;

// JSON ve URL-encoded verileri işlemek için middleware'leri ayarla
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// /api altındaki yollar için router kullan
app.use("/api", router);

// Ana rota
app.get("/", (req, res) => {
    res.json({
        message: "Hoş Geldiniz"
    });
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
