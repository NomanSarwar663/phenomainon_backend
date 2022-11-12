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
  addContact,
  getTenantsByLandlord,
  getProfessionalsByLandlord,
  updateContact,
  getContactsByServicePro,
  getProfessionalDetailById,
  getTenantDetailById,
} = require("./contact.service");
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
// const {
//   insertReminder,
//   getReminders,
//   updateReminder,
//   deleteReminder,
//   getReminderDetailById,
// } = require("./reminder.service.js");
// const {
//   insertTask,
//   getTasks,
//   updateTask,
//   deleteTask,
// } = require("./task.service.js");
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
const contactService = {
  addContact,
  getTenantsByLandlord,
  getProfessionalsByLandlord,
  updateContact,
  getContactsByServicePro,
  getProfessionalDetailById,
  getTenantDetailById,
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
  categoryService,
  requestService,
  issueService,
  propertyService,
  planService,
  contactService,
  listingService,
  leaseService,
  applicationService,
  reminderService,
  taskService,
  accountingService,
};
