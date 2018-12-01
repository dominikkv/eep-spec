var parser = require('xml2json');
var fs = require("fs")


var data = fs.readFileSync("eep2.6.5.patch1.xml","utf-8")

var json = JSON.parse(parser.toJson(data));

var rorgs=json.eep.profile

//fs.writeFileSync("eep.json",JSON.stringify(rorgs,null,'  '))

var flattend={}
var n=0
rorgs.rorg.forEach(function(arorg,index){
  var rorg = arorg.number.substring(2,4).toLowerCase()
  if(arorg.func.constructor !== Array){
    arorg.func=[arorg.func]
  }
  arorg.func.forEach(function(afunc,index){
    var func=afunc.number.substring(2,4).toLowerCase()
    if(afunc.type.constructor !== Array){
      afunc.type=[afunc.type]
    }
    afunc.type.forEach(function(atype,index){
      var typ = atype.number.substring(2,4).toLowerCase()
      var eep_index=`${rorg}-${func}-${typ}`
      n++
      atype.originalIndex=n
      atype.eep=eep_index
      atype.rorg_title=arorg.title
      atype.rorg_number=arorg.number
      atype.func_title=afunc.title
      atype.func_number=afunc.number
      flattend[eep_index]=atype
      fs.writeFileSync("eep/"+eep_index+".json",JSON.stringify(atype,null,'  '))
      //delete atype.description
      delete atype.status
    })
  })
})

//fs.writeFileSync("eep_flattened.json",JSON.stringify(flattend,null,'  '))
