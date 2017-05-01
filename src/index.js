var parser = require('xml2json');
var fs = require("fs")
var files = fs.readdirSync("./eep")
var arr=[]
files.forEach(function(filename){
  var data=fs.readFileSync("./eep/"+filename)
  arr.push(JSON.parse(data))
})
arr=arr.sort(function(a,b){return a.originalIndex - b.originalIndex})
var obj={}
arr.forEach(function(item){
  obj[item.eep]=item
})

fs.writeFileSync("../eep.json",JSON.stringify(obj,null,'  '))
