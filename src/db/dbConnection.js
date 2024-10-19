const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL)

.then((res) => {
    console.log("Baglandi");  
})

.catch((error) => {
    console.log("Baglanamadi");
})