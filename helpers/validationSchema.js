const Joi = require("joi");

const validationValues = {
  email: Joi.string()
    .lowercase()
    .pattern(
      new RegExp(
        "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"
      )
    )
    .required()
    .messages({
      "string.base": `Email does not have a valid value`,
      "string.pattern.base": `Email does not have a valid value`,
      "string.empty": `Email cannot be empty`,
      "any.required": `Email is required`,
    }),
  password: Joi.string().lowercase().required().min(6).messages({
    "string.pattern.base": `Password does not have a valid value`,
    "string.empty": `Password cannot be empty`,
    "any.required": `Password is required`,
    "string.min": `Password length must be 6 characters long`,
  }),
  firstName: Joi.string().min(3).max(20).required().messages({
    "string.empty": `Name cannot be empty`,
    "any.required": `Name required`,
    "string.min": `First Name length must be atleast 3 characters long`,
    "string.max": `First Name length must be exeed 20 characters`,
  }),
  lastName: Joi.string().min(3).max(20).required().messages({
    "string.empty": `Name cannot be empty`,
    "any.required": `Name required`,
    "string.min": `Last Name length must be atleast 3 characters long`,
    "string.max": `Last Name length must not be exeed 20 characters`,
  }),
};

const planSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": `Title cannot be empty`,
    "any.required": `Title iss required`,
  }),
  description: Joi.string().required().messages({
    "string.empty": `Description cannot be empty`,
    "any.required": `Description is required`,
  }),
  type: Joi.string().required().messages({
    "string.empty": `Plan cannot be empty`,
    "any.required": `Plan type is required`,
  }),
});

const registerUserSchema = Joi.object({
  email: validationValues.email,
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  password: validationValues.password,
});

const changePasswordSchema = Joi.object({
  newPassword: validationValues.password,
});

const updateUserSchema = Joi.object({
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  phoneNo: Joi.string().min(0).max(15),
});

const contactUsSchema = Joi.object({
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  email: validationValues.email,
  message: Joi.string().min(10).required().messages({
    "string.empty": "Message cannot be empty",
    "string.min": "Message should be at least 10 characters long",
    "any.required": "Message is required",
  }),
});

const reportIncident = Joi.object({
  createdBy: Joi.string().min(0).required().messages({
    "any.required": `Created By is required`,
  }),
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  email: validationValues.email,
  address: Joi.string().optional().messages({
    "string.empty": `Address cannot be empty`,
    "any.required": `Address is required`,
  }),
  countryCode: Joi.string().optional().messages({
    "string.empty": `Country code cannot be empty`,
    "any.required": `Country code is required`,
  }),
  phoneNo: Joi.string().optional().messages({
    "string.empty": `PhoneNo cannot be empty`,
    "any.required": `PhoneNo is required`,
  }),
  incidentStartDate: Joi.object().optional().messages({
    "string.empty": `Incident start date cannot be empty`,
    "any.required": `Incident start date is required`,
  }),
  incidentTime: Joi.object().optional().messages({
    "string.empty": `Incident time cannot be empty`,
    "any.required": `Incident time is required`,
  }),
  incidentDuration: Joi.object().optional().messages({
    "string.empty": `Incident duration cannot be empty`,
    "any.required": `Incident duuration is required`,
  }),
  incidentDesc: Joi.string().optional().messages({
    "string.empty": `Incident description cannot be empty`,
    "any.required": `Incident description is required`,
  }),
  timeOfDay: Joi.string().optional().messages({
    "string.empty": `Time of day cannot be empty`,
    "any.required": `Time of day is required`,
  }),
  weather: Joi.string().optional().messages({
    "string.empty": `Weather cannot be empty`,
    "any.required": `Weather is required`,
  }),
  cloudFormation: Joi.string().optional().messages({
    "string.empty": `Cloud formation cannot be empty`,
    "any.required": `Cloud formation is required`,
  }),
  UAPDetected: Joi.string().optional().messages({
    "string.empty": `UAP detected cannot be empty`,
    "any.required": `UAP detected is required`,
  }),
  noOfUAPs: Joi.number().min(1).optional().messages({
    "any.required": `No of UAPs is required`,
  }),
  lifeFormsDetected: Joi.string().optional().messages({
    "string.empty": `Life Forms detected cannot be empty`,
    "any.required": `Life Forms detected is required`,
  }),
  noOfLifeForms: Joi.number().min(1).optional().messages({
    "any.required": `No of life forms is required`,
  }),
  UAPShape: Joi.string().optional().messages({
    "string.empty": `UAP shape cannot be empty`,
    "any.required": `UAP shape is required`,
  }),
  UAPSize: Joi.number().min(1).optional().messages({
    "any.required": `UAP size is required`,
  }),
  sizeUnit: Joi.string().optional().messages({
    "string.empty": `Size unit cannot be empty`,
    "any.required": `Size unit is required`,
  }),
  lightEmissions: Joi.string().optional().messages({
    "string.empty": `Light Emissions cannot be empty`,
    "any.required": `Light Emissions is required`,
  }),
  colorOfLight: Joi.string().optional().messages({
    "string.empty": `Color of Light cannot be empty`,
    "any.required": `Color of Light is required`,
  }),
  colorOfUAP: Joi.string().optional().messages({
    "string.empty": `Color of UAP cannot be empty`,
    "any.required": `Color of UAP is required`,
  }),
  sound: Joi.string().optional().messages({
    "string.empty": `Sound cannot be empty`,
    "any.required": `Sound is required`,
  }),
  animalReactions: Joi.string().optional().messages({
    "string.empty": `Animal Reactions cannot be empty`,
    "any.required": `Animal Reactions is required`,
  }),
  radarData: Joi.string().optional().messages({
    "string.empty": `Radar data cannot be empty`,
    "any.required": `Radar data is required`,
  }),
  emfEffects: Joi.string().optional().messages({
    "string.empty": `EMF effects cannot be empty`,
    "any.required": `EMF effects is required`,
  }),
  radiation: Joi.string().optional().messages({
    "string.empty": `Radiation cannot be empty`,
    "any.required": `Radiation is required`,
  }),
  direction: Joi.string().optional().messages({
    "string.empty": `Direction cannot be empty`,
    "any.required": `Direction is required`,
  }),
  jetPropulsion: Joi.string().optional().messages({
    "string.empty": `Jet propulsion cannot be empty`,
    "any.required": `Jet propulsion is required`,
  }),
  wingsOrPropellers: Joi.string().optional().messages({
    "string.empty": `Wings or Propellers cannot be empty`,
    "any.required": `Wings or Propellers is required`,
  }),
  speed: Joi.number().min(1).optional().messages({
    "any.required": `Speed is required`,
  }),
  speedUnit: Joi.string().optional().messages({
    "string.empty": `Speed unit cannot be empty`,
    "any.required": `Speed unit is required`,
  }),
  altitude: Joi.number().min(1).optional().messages({
    "any.required": `Altitude is required`,
  }),
  altitudeUnit: Joi.string().optional().messages({
    "string.empty": `Altitude unit cannot be empty`,
    "any.required": `Altitude unit is required`,
  }),
  distance: Joi.number().min(1).optional().messages({
    "any.required": `Distance is required`,
  }),
  distanceUnit: Joi.string().optional().messages({
    "string.empty": `Distance unit cannot be empty`,
    "any.required": `Distance unit is required`,
  }),
  cloakingOrInvisibility: Joi.string().optional().messages({
    "string.empty": `Cloaking or Invisibility cannot be empty`,
    "any.required": `Cloaking or Invisibility is required`,
  }),
  additionalMovement: Joi.string().optional().messages({
    "string.empty": `Additional movement cannot be empty`,
    "any.required": `Additional movement is required`,
  }),
  lifeFormSpecies: Joi.string().optional().messages({
    "string.empty": `Life Form species cannot be empty`,
    "any.required": `Life Form species is required`,
  }),
  clothed: Joi.string().optional().messages({
    "string.empty": `Clothed cannot be empty`,
    "any.required": `Clothed is required`,
  }),
  uniformed: Joi.string().optional().messages({
    "string.empty": `Uniformed cannot be empty`,
    "any.required": `Uniformed is required`,
  }),
  helmet: Joi.string().optional().messages({
    "string.empty": `Helmet cannot be empty`,
    "any.required": `Helmet is required`,
  }),
  avatarOrDrone: Joi.string().optional().messages({
    "string.empty": `Avatar or Drone cannot be empty`,
    "any.required": `Avatar or Drone is required`,
  }),
  eyeSize: Joi.string().optional().messages({
    "string.empty": `Eye size cannot be empty`,
    "any.required": `Eye size is required`,
  }),
  eyeType: Joi.string().optional().messages({
    "string.empty": `Eye type cannot be empty`,
    "any.required": `Eye type is required`,
  }),
  height: Joi.string().optional().messages({
    "string.empty": `Height cannot be empty`,
    "any.required": `Height is required`,
  }),
  heightValue: Joi.number().min(1).optional().messages({
    "any.required": `Height value is required`,
  }),
  lifeFormMeasurement: Joi.string().optional().messages({
    "string.empty": `Life Form Measurement cannot be empty`,
    "any.required": `Life Form Measurement is required`,
  }),
  physique: Joi.string().optional().messages({
    "string.empty": `Physique cannot be empty`,
    "any.required": `Physique is required`,
  }),
  consciousEffects: Joi.string().optional().messages({
    "string.empty": `Conscious Effects cannot be empty`,
    "any.required": `Conscious Effects is required`,
  }),
  additionalWitnesses: Joi.string().optional().messages({
    "string.empty": `Additional Witnesses cannot be empty`,
    "any.required": `Additional Witnesses is required`,
  }),
  noOfWitnesses: Joi.number().min(1).optional().messages({
    "any.required": `No of Witnesses is required`,
  }),
  mentalStateOfObserver: Joi.string().optional().messages({
    "string.empty": `Mental State of Observer cannot be empty`,
    "any.required": `Mental State of Observer is required`,
  }),
  trustFactor: Joi.string().optional().messages({
    "string.empty": `Trust Factor cannot be empty`,
    "any.required": `Trust Factor is required`,
  }),
  additionalWitnessInform: Joi.string().optional().messages({
    "string.empty": `Additional Witness Inform cannot be empty`,
    "any.required": `Additional Witness Information is required`,
  }),
  additionalComments: Joi.string().optional().messages({
    "string.empty": `Additional Comments cannot be empty`,
    "any.required": `Additional Comments is required`,
  }),
  incidentImage: Joi.string().optional().messages({
    "string.empty": `Incident Image cannot be empty`,
    "any.required": `Incident Image is required`,
  }),
  incidentVideo: Joi.string().optional().messages({
    "string.empty": `Incident Video cannot be empty`,
    "any.required": `Incident Video is required`,
  }),
  incidentLink: Joi.string().optional().messages({
    "string.empty": `Incident Link cannot be empty`,
    "any.required": `Incident Link is required`,
  }),
});

const issueSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": `Title cannot be empty`,
    "any.required": `Title name required`,
  }),
});

const propertySchema = Joi.object({
  // userId: Joi.string().required().messages({
  //     "any.required": `UserId is required`,
  // }),
  name: Joi.string().required().messages({
    "string.empty": `Property Name cannot be empty`,
    "any.required": `Property name is required`,
  }),
  currency: Joi.string().required().messages({
    "string.empty": `Currency cannot be empty`,
    "any.required": `Currency name required`,
  }),
  propertyPhoto: Joi.string().optional().messages({
    "string.empty": `propertyPhoto cannot be empty`,
    "any.required": `propertyPhoto name required`,
  }),
  // propertyImageGallery: Joi.array().optional().messages({
  //     "string.empty": `propertyImageGallery cannot be empty`,
  //     "any.required": `propertyImageGallery name required`,
  // }),
  builtYear: Joi.number().optional().messages({
    "string.empty": `builtYear cannot be empty`,
    "any.required": `builtYear name required`,
  }),
  MIsNumber: Joi.string().optional().messages({
    "string.empty": `MIsNumber cannot be empty`,
    "any.required": `MIsNumber name required`,
  }),
  streetAddress: Joi.string().required().messages({
    "string.empty": `Street Address cannot be empty`,
    "any.required": `Street Address name required`,
  }),
  city: Joi.string().required().messages({
    "string.empty": `City cannot be empty`,
    "any.required": `City name required`,
  }),
  state: Joi.string().required().messages({
    "string.empty": `State cannot be empty`,
    "any.required": `State name required`,
  }),
  zip: Joi.string().required().messages({
    "string.empty": `Zip cannot be empty`,
    "any.required": `Zip is required`,
  }),
  country: Joi.string().required().messages({
    "string.empty": `Country cannot be empty`,
    "any.required": `Country name required`,
  }),
  propertyType: Joi.any().required().messages({
    "string.empty": `Property Type cannot be empty`,
    "any.required": `Property Type name required`,
  }),
  beds: Joi.string().optional().messages({
    "string.empty": `beds cannot be empty`,
    "any.required": `beds name required`,
  }),
  baths: Joi.string().optional().messages({
    "string.empty": `baths cannot be empty`,
    "any.required": `baths name required`,
  }),
  size: Joi.string().optional().messages({
    "string.empty": `size cannot be empty`,
    "any.required": `size name required`,
  }),
  rent: Joi.number().optional().messages({
    "string.empty": `rent cannot be empty`,
    "any.required": `rent name required`,
  }),
  unitInfo: Joi.object().optional().messages({
    "string.empty": `unitInfo cannot be empty`,
    "any.required": `unitInfo name required`,
  }),
  deposit: Joi.number().optional().messages({
    "string.empty": `deposit cannot be empty`,
    "any.required": `deposit name required`,
  }),
  parking: Joi.string().optional().messages({
    "string.empty": `parking cannot be empty`,
    "any.required": `parking name required`,
  }),
  laundry: Joi.string().optional().messages({
    "string.empty": `laundry cannot be empty`,
    "any.required": `laundry name required`,
  }),
  airConditioning: Joi.string().optional().messages({
    "string.empty": `airConditioning cannot be empty`,
    "any.required": `airConditioning name required`,
  }),
  propertyFeatures: Joi.array().optional().messages({
    "string.empty": `propertyFeatures cannot be empty`,
    "any.required": `propertyFeatures name required`,
  }),
  propertyAmenities: Joi.array().optional().messages({
    "string.empty": `propertyAmenities cannot be empty`,
    "any.required": `propertyAmenities name required`,
  }),
  propertyAttachments: Joi.array().optional().messages({
    "string.empty": `propertyAttachments cannot be empty`,
    "any.required": `propertyAttachments name required`,
  }),
  createdBy: Joi.string().required().messages({
    "string.empty": `Created By cannot be empty`,
    "any.required": `Created By is required`,
  }),
});

const contactSchema = Joi.object({
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  role: Joi.string().optional().messages({
    "string.empty": `Role cannot be empty`,
    "any.required": `Role is required`,
  }),
  dateOfBirth: Joi.optional().messages({
    "string.empty": `Date OfBirthcannot be empty`,
    "any.required": `Date OfBirth is required`,
  }),
  age: Joi.optional().messages({
    "string.empty": `Age cannot be empty`,
    "any.required": `Age is required`,
  }),
  gender: Joi.string().optional().messages({
    "string.empty": `Gender cannot be empty`,
    "any.required": `Gender is required`,
  }),
  categoryId: Joi.string().optional().messages({
    "string.empty": `categoryId cannot be empty`,
    "any.required": `categoryId is required`,
  }),
  subCategoryId: Joi.string().optional().messages({
    "string.empty": `subCategoryId cannot be empty`,
    "any.required": `subCategoryId is required`,
  }),
  companyName: Joi.string().optional().messages({
    "string.empty": `companyName cannot be empty`,
    "any.required": `companyName is required`,
  }),
  companyWebsite: Joi.string().optional().messages({
    "string.empty": `companyWebsite cannot be empty`,
    "any.required": `companyWebsite is required`,
  }),
  displayAsCompany: Joi.boolean().optional().messages({
    "string.empty": `displayAsCompany cannot be empty`,
    "any.required": `displayAsCompany is required`,
  }),
  email: Joi.string().optional().messages({
    "string.empty": `Email cannot be empty`,
    "any.required": `Email is required`,
  }),
  phone: Joi.string().optional().messages({
    "string.empty": `Phone cannot be empty`,
    "any.required": `Phone is required`,
  }),
  emergencyContact: Joi.array().optional().messages({
    "string.empty": `Phone cannot be empty`,
    "any.required": `Phone is required`,
  }),
  pets: Joi.array().optional().messages({
    "string.empty": `Phone cannot be empty`,
    "any.required": `Phone is required`,
  }),
  vehicle: Joi.array().optional().messages({
    "string.empty": `Phone cannot be empty`,
    "any.required": `Phone is required`,
  }),
  notes: Joi.array().optional().messages({
    "string.empty": `Phone cannot be empty`,
    "any.required": `Phone is required`,
  }),
  address: Joi.array().optional().messages({
    "string.empty": `Address cannot be empty`,
    "any.required": `Address is required`,
  }),
  photo: Joi.string().optional().messages({
    "string.empty": `Photo cannot be empty`,
    "any.required": `Photo is required`,
  }),
  streetAddress: Joi.string().optional().messages({
    "string.empty": `Street Address cannot be empty`,
    "any.required": `Street Address name required`,
  }),
  city: Joi.string().optional().messages({
    "string.empty": `City cannot be empty`,
    "any.required": `City name required`,
  }),
  state: Joi.string().optional().messages({
    "string.empty": `State cannot be empty`,
    "any.required": `State name required`,
  }),
  zip: Joi.string().optional().messages({
    "string.empty": `Zip cannot be empty`,
    "any.required": `Zip is required`,
  }),
  country: Joi.string().optional().messages({
    "string.empty": `Country cannot be empty`,
    "any.required": `Country name required`,
  }),
  documents: Joi.array().optional().messages({
    "string.empty": `propertyAttachments cannot be empty`,
    "any.required": `propertyAttachments name required`,
  }),
  createdBy: Joi.string().required().messages({
    "string.empty": `Created By cannot be empty`,
    "any.required": `Created By is required`,
  }),
});

const listingSchema = Joi.object({
  createdBy: Joi.string().required().messages({
    "string.empty": `Created By cannot be empty`,
    "any.required": `Created By is required`,
  }),
  property: Joi.string().required().messages({
    "string.empty": `Property Ref cannot be empty`,
    "any.required": `Property Ref is required`,
  }),
  marketingDescription: Joi.string().required().messages({
    "string.empty": `Marketing Description cannot be empty`,
    "any.required": `Marketing Description is required`,
  }),
  leaseDetail: Joi.object().optional().messages({
    "string.empty": `Lease Detail cannot be empty`,
    "any.required": `Lease Detail is required`,
  }),
  allowPets: Joi.boolean().required().messages({
    "string.empty": `Allow Pets cannot be empty`,
    "any.required": `Allow Pets is required`,
  }),
  petsDetail: Joi.object().optional().messages({
    "string.empty": `Pets Detail cannot be empty`,
    "any.required": `Pets Detail is required`,
  }),
  phoneNumber: Joi.string().required().messages({
    "string.empty": `Phone Number cannot be empty`,
    "any.required": `Phone Number is required`,
  }),
});

const leaseSchema = Joi.object({
  createdBy: Joi.string().required().messages({
    "string.empty": `Created By cannot be empty`,
    "any.required": `Created By is required`,
  }),
  property: Joi.string().required().messages({
    "string.empty": `Property Ref cannot be empty`,
    "any.required": `Property Ref is required`,
  }),
  tenant: Joi.array().optional().messages({
    "string.empty": `Tenant Ref cannot be empty`,
    "any.required": `Tenant Ref is required`,
  }),
  // recurringRent: Joi.boolean().required().messages({
  //     "string.empty": `Recurring Rent cannot be empty`,
  //     "any.required": `Recurring Rent is required`,
  // }),
  rentSetting: Joi.object().optional().messages({
    "string.empty": `Recurring Rent Setting cannot be empty`,
    "any.required": `Recurring Rent Setting is required`,
  }),
  // requireDeposit: Joi.boolean().required().messages({
  //     "string.empty": `Require Deposit cannot be empty`,
  //     "any.required": `Require Deposit is required`,
  // }),
  depositInfo: Joi.object().optional().messages({
    "string.empty": `Deposit Info cannot be empty`,
    "any.required": `Deposit Info is required`,
  }),
  insurance: Joi.object().optional().messages({
    "string.empty": `insurance Info cannot be empty`,
    "any.required": `insurance Info is required`,
  }),
  leaseMonthToMonth: Joi.string().required().messages({
    "string.empty": `Lease Month To Month cannot be empty`,
    "any.required": `Lease Month To Month is required`,
  }),
  leaseDocuments: Joi.array().optional().messages({
    "string.empty": `leaseDocuments cannot be empty`,
    "any.required": `leaseDocuments is required`,
  }),
  // automaticLateFees: Joi.boolean().required().messages({
  //     "string.empty": `Automatic Late Fees cannot be empty`,
  //     "any.required": `Automatic Late Fees is required`,
  // }),
  // automaticLateFeesType: Joi.string().required().messages({
  //     "string.empty": `Automatic Late Fees Type cannot be empty`,
  //     "any.required": `Automatic Late Fees Type is required`,
  // }),
  // lateFeesType: Joi.string().required().messages({
  //     "string.empty": `Late Fees Type cannot be empty`,
  //     "any.required": `Late Fees Type is required`,
  // }),
  // lateFeesSetting: Joi.object().optional().messages({
  //     "string.empty": `Late Fees Setting cannot be empty`,
  //     "any.required": `Late Fees Setting is required`,
  // }),
});

const requestSchema = Joi.object({
  type: Joi.string().required().messages({
    "string.empty": `Request Type cannot be empty`,
    "any.required": `Request Type required`,
  }),
  categoryId: Joi.string().required().messages({
    "string.empty": `Category cannot be empty`,
    "any.required": `Category is required`,
  }),

  subCategoryId: Joi.string().required().messages({
    "string.empty": `Sub Category cannot be empty`,
    "any.required": `Sub Category is required`,
  }),
  issueId: Joi.string().required().messages({
    "string.empty": `Issue cannot be empty`,
    "any.required": `Issue is required`,
  }),
  subIssueId: Joi.string().required().messages({
    "string.empty": `Sub Issue cannot be empty`,
    "any.required": `Sub Issue is required`,
  }),
  createdBy: Joi.string().required().messages({
    "string.empty": `Tenant cannot be empty`,
    "any.required": `Tenant is required`,
  }),
  issueTitle: Joi.string().required().messages({
    "string.empty": `Issue Title cannot be empty`,
    "any.required": `Issue Title is required`,
  }),
  issueDetail: Joi.string().required().messages({
    "string.empty": `Issue Detail cannot be empty`,
    "any.required": `Issue Detail is required`,
  }),
  requestPriority: Joi.string().required().messages({
    "string.empty": `Request Priority cannot be empty`,
    "any.required": `Request Priority required`,
  }),
  issuePhoto: Joi.array().optional().messages({
    "string.empty": `issuePhoto cannot be empty`,
    "any.required": `issuePhoto name required`,
  }),
  isShare: Joi.boolean().required().messages({
    "string.empty": `Is Share cannot be empty`,
    "any.required": `Is Share is required`,
  }),
  authorizationCode: Joi.string().required().messages({
    "string.empty": `Authorization Code cannot be empty`,
    "any.required": `Authorization Code is required`,
  }),
  availableDates: Joi.array().optional().messages({
    "string.empty": `Available Dates cannot be empty`,
    "any.required": `Available Dates name required`,
  }),
  pets: Joi.object().required().messages({
    "string.empty": `Pets cannot be empty`,
    "any.required": `Pets is required`,
  }),
  property: Joi.string().required().messages({
    "string.empty": `Property Ref cannot be empty`,
    "any.required": `Property Ref is required`,
  }),
  tenant: Joi.string().required().messages({
    "string.empty": `Tenant Ref cannot be empty`,
    "any.required": `Tenant Ref is required`,
  }),
  assignee: Joi.string().required().messages({
    "string.empty": `Assignee Ref cannot be empty`,
    "any.required": `Assignee Ref is required`,
  }),
  // timeframe: Joi.object().optional().messages({
  //     "string.empty": `Time frame cannot be empty`,
  //     "any.required": `Time frame is required`,
  // }),
  materials: Joi.array().required().messages({
    "string.empty": `Materials be empty`,
    "any.required": `Materials required`,
  }),
  status: Joi.string().required().messages({
    "string.empty": `Status cannot be empty`,
    "any.required": `Status is required`,
  }),
});

const verifyEmailSchema = Joi.object({
  verifyEmailToken: Joi.string().required().messages({
    "string.empty": `Token cannot be empty`,
    "any.required": `Token is required`,
  }),
});

const aplicationSchema = Joi.object({
  createdBy: Joi.string().required().messages({
    "string.empty": `Created By cannot be empty`,
    "any.required": `Created By is required`,
  }),
  property: Joi.string().required().messages({
    "string.empty": `Property cannot be empty`,
    "any.required": `Property is required`,
  }),
  firstName: Joi.string().required().messages({
    "string.empty": `First name cannot be empty`,
    "any.required": `First Name is required`,
  }),
  lastName: Joi.string().required().messages({
    "string.empty": `Last name cannot be empty`,
    "any.required": `Last name is required`,
  }),
  middleName: Joi.string(),
  displayAsCompany: Joi.boolean(),
  companyName: Joi.string(),
  dateOfBirth: Joi.string().required().messages({
    "string.empty": `DOB cannot be empty`,
    "any.required": `DOB is required`,
  }),
  ssn: Joi.string(),
  gender: Joi.string(),
  status: Joi.string(),
  email: Joi.string().required().messages({
    "string.empty": `Email cannot be empty`,
    "any.required": `Email is required`,
  }),
  phone: Joi.string().required().messages({
    "string.empty": `Phone cannot be empty`,
    "any.required": `Phone is required`,
  }),
  driverLicense: Joi.string(),
  driverLicenseState: Joi.string(),
  moveInDate: Joi.string(),
  bio: Joi.string(),
  vehicle: Joi.array(),
  pets: Joi.array(),
  additionalOccupants: Joi.array(),
  rentalHistory: Joi.array(),
  employmentHistory: Joi.array(),
  additionalIncomes: Joi.array(),
  emergencyContacts: Joi.array(),
  references: Joi.array(),
  applicantPhoto: Joi.string(),
});

const reminderSchema = Joi.object({
  categoryId: Joi.string().required().messages({
    "string.empty": `Category cannot be empty`,
    "any.required": `Category is required`,
  }),
  subCategoryId: Joi.string().required().messages({
    "string.empty": `Sub Category cannot be empty`,
    "any.required": `Sub Category is required`,
  }),
  issueId: Joi.string().required().messages({
    "string.empty": `Issue cannot be empty`,
    "any.required": `Issue is required`,
  }),
  subIssueId: Joi.string().required().messages({
    "string.empty": `Sub Issue cannot be empty`,
    "any.required": `Sub Issue is required`,
  }),
  createdBy: Joi.string().required().messages({
    "string.empty": `Tenant cannot be empty`,
    "any.required": `Tenant is required`,
  }),
  // title: Joi.string().required().messages({
  //     'string.empty': `Title cannot be empty`,
  //     'any.required': `title is required`,
  // }),
  property: Joi.string().required().messages({
    "string.empty": `Property cannot be empty`,
    "any.required": `Property is required`,
  }),
  priority: Joi.string().required().messages({
    "string.empty": `Priority cannot be empty`,
    "any.required": `Priority is required`,
  }),
  nextService: Joi.string().required().messages({
    "string.empty": `Next service cannot be empty`,
    "any.required": `Next service is required`,
  }),
  schedule: Joi.string().required().messages({
    "string.empty": `Schedule cannot be empty`,
    "any.required": `Schedule is required`,
  }),
  daysBefore: Joi.string(),
  detail: Joi.string(),
});
const taskSchema = Joi.object({
  createdBy: Joi.string().required().messages({
    "string.empty": `Created By cannot be empty`,
    "any.required": `Created By is required`,
  }),
  property: Joi.string().required().messages({
    "string.empty": `Property cannot be empty`,
    "any.required": `Property is required`,
  }),
  dateTime: Joi.string().required().messages({
    "string.empty": `Date Time cannot be empty`,
    "any.required": `Date Time is required`,
  }),
  taskDetail: Joi.string().required().messages({
    "string.empty": `Task detail cannot be empty`,
    "any.required": `Task detail is required`,
  }),
  isRecurring: Joi.boolean(),
  recurringFrequency: Joi.string(),
});

const accountingSchema = Joi.object({
  categoryId: Joi.string().required().messages({
    "string.empty": `Category cannot be empty`,
    "any.required": `Category is required`,
  }),
  // subCategoryId: Joi.string().required().messages({
  //     "string.empty": `Sub Category cannot be empty`,
  //     "any.required": `Sub Category is required`,
  // }),
  createdBy: Joi.string().required().messages({
    "string.empty": `Created By cannot be empty`,
    "any.required": `Created By is required`,
  }),
  dueOn: Joi.string(),
  amount: Joi.string(),
  payer: Joi.string().required().messages({
    "string.empty": `payer cannot be empty`,
    "any.required": `payer is required`,
  }),
  lease: Joi.string(),
  details: Joi.string().required().messages({
    "string.empty": `details cannot be empty`,
    "any.required": `details is required`,
  }),
  type: Joi.string().required().messages({
    "string.empty": `type cannot be empty`,
    "any.required": `type is required`,
  }),
  accountingType: Joi.string().required().messages({
    "string.empty": `Accounting Type cannot be empty`,
    "any.required": `Accounting Type is required`,
  }),
  transactionType: Joi.string().required().messages({
    "string.empty": `Transaction Type cannot be empty`,
    "any.required": `Transaction Type is required`,
  }),
  startDate: Joi.string(),
  endDate: Joi.string(),
  frequency: Joi.string(),
  files: Joi.array().optional().messages({
    "string.empty": `files cannot be empty`,
    "any.required": `files name required`,
  }),
});

/**
 * wrap all validation schemas with validate object
 */
module.exports = {
  registerUserSchema,
  changePasswordSchema,
  verifyEmailSchema,
  updateUserSchema,
  contactUsSchema,
  reportIncident,
  reportIncident,
  requestSchema,
  issueSchema,
  propertySchema,
  planSchema,
  contactSchema,
  listingSchema,
  leaseSchema,
  aplicationSchema,
  reminderSchema,
  taskSchema,
  accountingSchema,
};
