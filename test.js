var myUtil = require('./util.js');
var url = "http://www.baidu.com";
var cheerio = require('cheerio');
var $;
myUtil.get(url,function(content,status){
  console.log("status:="+status);
  $ = cheerio.load(content);
  console.log($("#lg").html());
});