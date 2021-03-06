const http = require("http");
const express = require("express");
const { app } = require("./app");
const server = http.createServer(app);
const cors = require("cors");
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const contactUsRoutes = require("./routes/contactus.routes");
const reportRoutes = require("./routes/report.routes");

const requestRoutes = require("./routes/request.routes");
const categoriesRoute = require("./routes/categories.routes");
const issuesRoute = require("./routes/issue.routes");
const propertyRoute = require("./routes/property.routes");
const planRoute = require("./routes/plan.routes");
const listingRoute = require("./routes/listing.routes");
const leaseRoute = require("./routes/lease.route");
const applicationRoute = require("./routes/application.routes");
const taskRoute = require("./routes/task.routes");
const accountingRoute = require("./routes/accounting.routes");

app.use(express.json());
app.use(cors());

//setup static folders
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
//setup routes
app.use(authRoutes);
app.use(userRoutes);
app.use(contactUsRoutes);
app.use(reportRoutes);

app.use(requestRoutes);
app.use(categoriesRoute);
app.use(issuesRoute);
app.use(propertyRoute);
app.use(planRoute);
app.use(listingRoute);
app.use(leaseRoute);
app.use(applicationRoute);
app.use(taskRoute);
app.use(accountingRoute);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
