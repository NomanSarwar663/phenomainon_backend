const {
  register,
  login,
  verifyEmail,
  changePassword,
  forgotPassword,
  resetPassword,
  userPlan,
} = require("./auth.service");
const { updateUser } = require("./user.service");
const { sendMessage } = require("./contactus.service");
const { reportIncident } = require("./report.service");

const { wellComeEmail } = require("./mail.service.js");
const { insertCategories, findRequested } = require("./category.service");
const {
  insertRequest,
  getRequests,
  updateRequestByLandlord,
  deleteRequestByLandlord,
} = require("./request.service");
const { insertIssues, getIssues } = require("./issue.service");
const {
  addProperty,
  getPropertiesByLandlord,
  updateProperty,
  deletePropertyByLandlord,
  getPropertyDetailById,
} = require("./property.service");
const { createPlan, getPlans } = require("./plan.service");
const {
  addListing,
  getListingByLandlord,
  updateListing,
} = require("./listing.service");
const { addLease, getLeaseByLandlord } = require("./lease.service");
const {
  insertApplication,
  getApplication,
  getApplicationDetailById,
  updateApplication,
  deleteApplication,
  getApplicationByTenant,
} = require("./application.service");
const {
  insertReminder,
  getReminders,
  updateReminder,
  deleteReminder,
  getReminderDetailById,
} = require("./reminder.service.js");
const {
  insertTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("./task.service.js");
const {
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
  getRecurringTransaction,
  getTransactionDetailById,
} = require("./accounting.service.js");

const mailService = {
  wellComeEmail,
};
const categoryService = {
  insertCategories,
  findRequested,
};
const requestService = {
  insertRequest,
  getRequests,
  updateRequestByLandlord,
  deleteRequestByLandlord,
};
const issueService = {
  insertIssues,
  getIssues,
};
const authService = {
  register,
  login,
  verifyEmail,
  changePassword,
  forgotPassword,
  resetPassword,
  userPlan,
};

const userService = {
  updateUser,
};

const contactUsService = {
  sendMessage,
};

const reportService = {
  reportIncident,
};

const propertyService = {
  addProperty,
  getPropertiesByLandlord,
  updateProperty,
  deletePropertyByLandlord,
  getPropertyDetailById,
};
const planService = {
  createPlan,
  getPlans,
};
const listingService = {
  addListing,
  getListingByLandlord,
  updateListing,
};
const leaseService = {
  addLease,
  getLeaseByLandlord,
};

const applicationService = {
  insertApplication,
  getApplication,
  updateApplication,
  deleteApplication,
  getApplicationByTenant,
  getApplicationDetailById,
};
const reminderService = {
  insertReminder,
  getReminders,
  updateReminder,
  deleteReminder,
  getReminderDetailById,
};
const taskService = {
  insertTask,
  getTasks,
  updateTask,
  deleteTask,
};
const accountingService = {
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
  getRecurringTransaction,
  getTransactionDetailById,
};

module.exports = {
  authService,
  userService,
  mailService,
  contactUsService,
  reportService,
  categoryService,
  requestService,
  issueService,
  propertyService,
  planService,
  listingService,
  leaseService,
  applicationService,
  reminderService,
  taskService,
  accountingService,
};
