module.exports = {

  mongoURI: "mongodb://localhost:27017/grocery-live-content-service",

  expressPort: 3052,
  siteUrl: "http://192.168.1.177:3052",
  rootPath: "E:/xampp/htdocs/grocery/content-service",

  // database name
  databaseName: "grocery-live-content-service",

  // project name
  siteTitle: "Grocery App",

  // API gateway base url
  apiGatewayUrl: "http://192.168.1.177:3050",

  // api key for web service access
  apiAccessKey: "Ijefdsyce",

  // Redis Config Options. Ref: https://www.npmjs.com/package/ioredis
  redisConfigOpts: {
    port: 6379,
    host: "127.0.0.1",
    prefix: "local_grocery_user",
    password: "beLJzkzJWmY58bhnq62TKKDawlx1z97yVeLQOn3ZNFG1qrpwaL8Qe9cZzlWi7PcQp1+0ils9v/ahwofY",
    db: 4,
  }, 

  // when call services internally, use this key instead of token
  internalApiAccessKey: "3x[aR45]YJRJS}45",

  // api key for node-geocoder npm package
  geocoderApiKey: "AIzaSyCnHXmtGqz7eOZg2rW9U20KDit1tRF6rhU",

  apiAccessKeyForOther: "IYgshr4f(jiv6",

  validateApiAccess: true,

  // when call services internally, use this key instead of token
  internalApiAccessKey: "3x[aR45]YJRJS}45",
};
