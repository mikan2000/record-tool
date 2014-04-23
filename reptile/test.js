var myUtil = require('./util.js');
var url = "http://jandan.net/ooxx/page-1119";
var cheerio = require('cheerio');
var $;
myUtil.get(url,function(content,status){
  console.log("status:="+status);
  $ = cheerio.load(content);
  $('ol > li > p > img').each(function(i) {
    console.log($(this).attr("src"));
    myUtil.saveImage($(this).attr("src"), i)
  });
});