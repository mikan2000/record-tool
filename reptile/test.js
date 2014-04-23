var myUtil = require('./util.js'),
    fs = require('fs'),
    path = require("path"),
    cheerio = require('cheerio');
var $,
    folder,
    start = 1118,
    end = 1119,
    url = "http://jandan.net/ooxx/page-";

for(var page = start; page <= end; page++){
  console.log(page);
  folder = __dirname + "\\meizitu\\" + page;
  if(!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  myUtil.get(url+page, function(content,status) {    
    console.log("status:="+status);
    console.log(url+page);
    console.log(folder);
    $ = cheerio.load(content);
    $('ol > li > p > img').each(function(i) {
      myUtil.saveImage($(this).attr("src"), i, folder)
    });
  });
}
