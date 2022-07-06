const http = require("http");
const express = require("express");
const {app} = require("./app");
const server = http.createServer(app);
const cors = require("cors");
const path = require('path')


const {API_PORT} = process.env;
const port = process.env.PORT || API_PORT;

const bucketRoutes = require('./routes/bucket.route')
const authRoutes = require('./routes/auth.routes')
const contactUsRoutes = require('./routes/contactus.routes')

app.set('views',path.join(__dirname, 'temp'))
app.set('view engine', 'ejs')

app.use(express.json());
app.use(cors());

app.use(bucketRoutes)
app.use(authRoutes)
app.use(contactUsRoutes)
app.get('/mail',function(req,res){
    mail()
    return res.send("mail send successfuly")     
})
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
