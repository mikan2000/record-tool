var MyUtil = function () {};
var http = require('http'),
    fs = require('fs'),
    request = require('request');
MyUtil.prototype.get=function(url, folder, callback){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body, response.statusCode, folder);
    }
  });
}
MyUtil.prototype.saveImage=function(url, i, folder){
  var hostName = url.split('/')[2];
  var path = url.substring(url.indexOf(hostName) + hostName.length);
  var options = {
    host : hostName,
    port : 80,
    path : path
  };
  http.get(options, function(res) {
    res.setEncoding('binary');
    var imageData = "";
    res.on('data', function(data) {// 图片加载到内存变量
      imageData += data;
    }).on('end',function() {// 加载完毕保存图片
          var fileType = res.headers["content-type"];
          var buffer = new Buffer(imageData, "Binary");
          var fileTypeArray = fileType.split("/");
          fs.writeFile(folder + "\\" + i + "." + fileTypeArray[1], buffer);
          console.log(folder + "\\" + i + "." + fileTypeArray[1]);
        });
  });
}
module.exports = new MyUtil();