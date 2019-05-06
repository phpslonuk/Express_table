var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



var data = {
	caption: "data",
	headers: ["header1", "header2", "header3"],
	data: [
		["data1", "data11", "data111"],
		["data2", "data22", "data222"],
		["data3", "data33", "data333"]
	]
};

app.get('/', function (req, res) {
  res.send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});