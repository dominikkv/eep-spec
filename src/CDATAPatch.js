var parser = require('xml2json');
var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;
var fs = require("fs")


var data = fs.readFileSync("eep2.6.5.xml","utf-8")

var doc = new DOMParser().parseFromString(data)

var descs = doc.getElementsByTagName("description")
for(var i = 0;i<descs.length;i++){
  var desc = new XMLSerializer().serializeToString(descs[i])
  var content=desc.replace("<description>","")
  content=content.replace("</description>","")
  content=content.replace("<description/>","")

  var newdesc=doc.createElement("description")
  var cdata=doc.createCDATASection(content)
  newdesc.appendChild(cdata)
  descs[i].parentNode.replaceChild(newdesc,descs[i])

}
data = new XMLSerializer().serializeToString(doc)
fs.writeFileSync("eep2.6.5.patch1.xml",data)
// data=data.replace(/<br\/>/g,"")
//
//var json = JSON.parse(parser.toJson(data));
//
// var rorgs=json.eep.profile
//
//
// var flattend={}
// rorgs.rorg.forEach(function(arorg,index){
//   var rorg = arorg.number.substring(2,4).toLowerCase()
//   if(arorg.func.constructor !== Array){
//     arorg.func=[arorg.func]
//   }
//   arorg.func.forEach(function(afunc,index){
//     var func=afunc.number.substring(2,4).toLowerCase()
//     if(afunc.type.constructor !== Array){
//       afunc.type=[afunc.type]
//     }
//     afunc.type.forEach(function(atype,index){
//       var typ = atype.number.substring(2,4).toLowerCase()
//       var eep_index=`${rorg}-${func}-${typ}`
//       atype.eep=eep_index
//       atype.rorg_title=arorg.title
//       atype.rorg_number=arorg.number
//       atype.func_title=afunc.title
//       atype.func_number=afunc.number
//       flattend[eep_index]=atype
//       if(eep_index=="f6-02-01"){
//         console.log(atype.case[0].datafield[0].enum.item[0].description)
//       }
//       delete atype.description
//       delete atype.status
//     })
//   })
// })
//fs.writeFileSync("eep_flattened.json",JSON.stringify(flattend,null,'  '))
