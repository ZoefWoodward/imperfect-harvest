module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const whyRoute = require("../routes/why");
      const howRoute = require("../routes/how");
      const preferencesRoute = require("../routes/preferences");
      const userRoute = require("../routes/users");

      app.use(staticRoutes);
      app.use(whyRoute);
      app.use(howRoute);
      app.use(preferencesRoute);
      app.use(userRoute);
    }
  }