module.exports = {

  mongoURI: "mongodb://localhost:27017/grocery-user-service",

  expressPort: 3050,
  siteUrl: "http://192.168.1.69:3050",
  rootPath: "E:\Grocery\api-gateway",

  // service base urls
  userServiceUrl: "http://192.168.1.69:3051",
  adminServiceUrl: "http://192.168.1.69:3052",

  // database name
  databaseName: "grocery-user-service",

  // project name
  siteTitle: "GroceryApp",

  // JWT Secret Key
  jwtSecretKey: "GroceryAppusers",

  // Login session expiration setting for App Users
  appLoginSessionExpiryTime: 24 * 60, // in minutes
  appLoginSessionAuthCheck: true,

  timeZone: "Asia/Kolkata",

  // api key for web service access
  apiAccessKey: "keMStjdies",

  apiAccessKeyForOther: "IYgshr4f(jiv6",
  
  validateApiAccess:true,

  // when call services internally, use this key instead of token
  internalApiAccessKey: "3x[aR45]YJRJS}45",
};
