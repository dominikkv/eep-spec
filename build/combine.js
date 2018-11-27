var fs = require("fs")
var res={}
var eeps=fs.readdirSync("../eep")
eeps=eeps.map(function(item){
  var file=JSON.parse(fs.readFileSync("../eep/"+item))
  return file
})
eeps.sort((a,b)=>a.originalIndex-b.originalIndex)

eeps.forEach((item)=>{
  res[item.eep]=item
  console.log(item.originalIndex)
})
fs.writeFileSync("../eep.json",JSON.stringify(res))
//console.log(res)
