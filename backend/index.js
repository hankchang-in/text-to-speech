const express = require("express");
const cors = require("cors");
const fs = require("fs");
const util = require("util");
const Router = require('./Routes/Routes');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.use('/api' , Router )
// app.get('./api' , apiRoutes )



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
