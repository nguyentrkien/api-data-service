const DataSourceApi = require("../api/GetHeapStatisticsApi.js");
let _EXTERNAL_URL;
class GetHeapStatistics {
    getHeapStatistics = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    DataSourceApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
}

module.exports = new GetHeapStatistics();
