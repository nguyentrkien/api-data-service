const AssetsRoute = require("./Assets");
const VariablesRoute = require("./Variables");
const AspectsRoute = require("./Aspects");
const AspectTypesRoute = require("./AspectTypes");
const VariableConfigsRoute = require("./VariableConfigs");
const ServiceRoute = require("./Service");
const DataSouceRoute = require("./DataSource");
const ApdaptersRoute = require("./Adapters");
const AggregationsRoute = require("./Aggregations");
const DataRoute = require("./Data");
const BackupRoute = require("./Backup");
const DataRetentionRoute = require("./DataRetention");
const CalculateJobCollectionsRoute = require("./CalculateJobCollections");
const CalculateRoute = require("./Calculate");
const SendEmailRoute = require("./SendEmail");
const SystemRoute = require("./System")
const GetHeapStatisticsRoute = require("./GetHeapStatistics")
const AuthRoute = require("./Auth");
const User = require("./User")
// const TypeKPIRoute = require("./TypeKPI");

function route(app) {
  app.use("/", CalculateRoute);
  app.use("/email", SendEmailRoute);
  // app.use("/type-kpi", TypeKPIRoute);
  app.use("/auth", AuthRoute);
  app.use("/user", User);
  app.use("/Assets", AssetsRoute);
  app.use("/Variables", VariablesRoute);
  app.use("/Aspects", AspectsRoute);
  app.use("/AspectTypes", AspectTypesRoute);
  app.use("/VariableConfigurations", VariableConfigsRoute);
  app.use("/Service", ServiceRoute);
  app.use("/DataSources", DataSouceRoute);
  app.use("/Adapters", ApdaptersRoute);
  app.use("/Aggregations", AggregationsRoute);
  app.use("/Data", DataRoute);
  app.use("/Backup", BackupRoute);
  app.use("/DataRetentions", DataRetentionRoute);
  app.use("/CalculateJobCollections", CalculateJobCollectionsRoute);
  app.use("/os", SystemRoute);
  app.use("/v8", GetHeapStatisticsRoute)
}

module.exports = route;
