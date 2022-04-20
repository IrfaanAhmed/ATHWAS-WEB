module.exports = {
  //mongoURI: "mongodb://grocery:grocery@192.168.1.45:27087/grocery",
  mongoURI: "mongodb://localhost:27017/grocery-live-user-service",

  //mongoURI: "mongodb://footprint:cQZMR[LqbtB8E@3.7.46.171:27017/grocery-live-user-service?authSource=admin",
  //mongoURI: "mongodb://footprint:cQZMR[LqbtB8E@3.7.83.168:27017/grocery-live-user-service?authSource=admin",

  expressPort: 3050,
  siteUrl: "http://192.168.1.78:3050",
  rootPath: "D:Groceryapi-gateway",

  // service base urls
  userServiceUrl: "http://192.168.1.78:3051",
  contentServiceUrl: "http://192.168.1.78:3052",

  // database name
  databaseName: "grocery-live-user-service",

  // project name
  siteTitle: "Athwas",

  // JWT Secret Key
  jwtSecretKey: "GroceryAppusers",

  // Login session expiration setting for App Users
  appLoginSessionExpiryTime: 24 * 60, // in minutes
  appLoginSessionAuthCheck: true,

  timeZone: "Asia/Kolkata",

  // api key for web service access
  apiAccessKey: "keMStjdies",

  apiAccessKeyForOther: "IYgshr4f(jiv6",

  validateApiAccess: true,

  // when call services internally, use this key instead of token
  internalApiAccessKey: "3x[aR45]YJRJS}45",
};
