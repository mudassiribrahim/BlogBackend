const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Database connected"))
.catch((err)=> console.log(err));
process.exit(1)