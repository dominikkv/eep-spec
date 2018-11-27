function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function rorgInfo(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array, JSON, Teldata, contents, parseInt, submitter, t99) {pug_mixins["eepListItem"] = pug_interp = function(itm,rorg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (itm) {
if (itm.eep == contents.eep) {
}
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes(["rorg_"+rorg], [true]), false, false)+pug_attr("href", "/eep/"+itm.eep+".html", true, false)) + "\u003E\u003Cdiv" + (pug_attr("class", pug_classes(["eepListItem",(contents.eep==itm.eep ? " selected":"")], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = itm.eep) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
}
};





























pug_mixins["condition"] = pug_interp = function(item){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (item.condition) {
if (item.condition.statusfield) {
t99 = new Teldata(1);
// iterate item.condition.statusfield
;(function(){
  var $$obj = item.condition.statusfield;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var statusbit = $$obj[pug_index1];
t99.setSingleBit(statusbit.bitoffs*1,statusbit.value*1)
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var statusbit = $$obj[pug_index1];
t99.setSingleBit(statusbit.bitoffs*1,statusbit.value*1)
    }
  }
}).call(this);

pug_html = pug_html + "\u003Ch3\u003EStatus 0x" + (pug_escape(null == (pug_interp = t99.toString()) ? "" : pug_interp)) + "(" + (pug_escape(null == (pug_interp = t99.toString(2)) ? "" : pug_interp)) + ")\u003C\u002Fh3\u003E";
}
if (item.condition.direction) {
pug_html = pug_html + "\u003Ch3\u003EDirection " + (pug_escape(null == (pug_interp = item.direction) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
}
if (item.condition.datafield) {
pug_html = pug_html + "\u003Ch3\u003EData " + (pug_escape(null == (pug_interp = item.condition.datafield.bitoffs) ? "" : pug_interp)) + " " + (pug_escape(null == (pug_interp = item.condition.datafield.bitsize) ? "" : pug_interp)) + " " + (pug_escape(null == (pug_interp = item.condition.datafield.value) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
}
}
};
pug_mixins["bitMask"] = pug_interp = function(itm,size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var t1 = new Teldata(size)
for(var i = 0; i<itm.bitsize;i++){
t1.setSingleBit(itm.bitoffs*1+i,1) 
}
pug_html = pug_html + (null == (pug_interp = t1.toSVG()) ? "" : pug_interp);
};




















































pug_html = pug_html + "\u003Csection\u003E\u003Ctable class=\"eep_info\"\u003E\u003Ctr\u003E\u003Ctd\u003Erorg\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = parseInt(contents.rorg_number).toString(16).padStart(2,"0")) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = contents.rorg_title) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E \u003Ctd\u003Efunc\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = parseInt(contents.func_number).toString(16).padStart(2,"0")) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = contents.func_title) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E \u003Ctd\u003Etype\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = parseInt(contents.number).toString(16).padStart(2,"0")) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = contents.title) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftable\u003E";
if (contents.submitter.length>0) {
pug_html = pug_html + "\u003Cdiv class=\"submitter\"\u003Esubmitted by ";
// iterate contents.submitter
;(function(){
  var $$obj = contents.submitter;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var sbmtr = $$obj[index];
pug_html = pug_html + (pug_escape(null == (pug_interp = index>0 ? " | ":"") ? "" : pug_interp)) + " \u003Ca" + (pug_attr("href", submitter[sbmtr].url, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = submitter[sbmtr].name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var sbmtr = $$obj[index];
pug_html = pug_html + (pug_escape(null == (pug_interp = index>0 ? " | ":"") ? "" : pug_interp)) + " \u003Ca" + (pug_attr("href", submitter[sbmtr].url, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = submitter[sbmtr].name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cdiv class=\"description\"\u003E" + (null == (pug_interp = contents.description) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
if (contents.ref) {
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003Esee\u003Ca" + (" class=\"ref\""+pug_attr("href", "/eep/"+contents.ref.rorg+"-"+contents.ref.func+"-"+contents.ref.type+".html", true, false)) + "\u003E" + (pug_escape(null == (pug_interp = contents.ref.rorg) ? "" : pug_interp)) + "-" + (pug_escape(null == (pug_interp = contents.ref.func) ? "" : pug_interp)) + "-" + (pug_escape(null == (pug_interp = contents.ref.type) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
if (contents.case) {
// iterate contents.case
;(function(){
  var $$obj = contents.case;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var item = $$obj[index];
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E";
pug_mixins["condition"](item);
pug_html = pug_html + "\u003Cdiv" + (pug_attr("id", "case_"+index+"telegram", true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003Ctable class=\"data_table\"\u003E";
if(!Array.isArray(item.datafield)) item.datafield=[item.datafield]
item.datafield.sort((a,b)=>a.bitoffs-b.bitoffs)
var size = 1
if(parseInt(contents.rorg_number)==0xa5) size=4 
var last = item.datafield[item.datafield.length-1]
if(parseInt(contents.rorg_number)==0xd2) size=(last.bitoffs*1+last.bitsize*1)/8
pug_html = pug_html + "\u003Ctr\u003E\u003Cth\u003Eoffset\u003C\u002Fth\u003E\u003Cth\u003Esize\u003C\u002Fth\u003E\u003Cth\u003EBit mask\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
// iterate item.datafield
;(function(){
  var $$obj = item.datafield;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var datafield = $$obj[pug_index6];
var addcls= (datafield.reserved==undefined)?"":"reserved"
pug_html = pug_html + "\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd colspan=\"3\"\u003E";
if ((typeof datafield.data) == "string") {
pug_html = pug_html + (pug_escape(null == (pug_interp = datafield.data) ? "" : pug_interp));
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = datafield.reserved==undefined?"&nbsp;":"unused") ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.bitoffs) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.bitsize) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E";
pug_mixins["bitMask"](datafield,size);
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd colspan=\"3\"\u003E ";
if (datafield.enum && datafield.enum.item) {
pug_html = pug_html + "\u003Ch3\u003EEnum\u003C\u002Fh3\u003E\u003Ctable class=\"enum_table\"\u003E";
if(!datafield.enum.hasOwnProperty("item")) datafield.enum.item=[]
if(datafield.enum.item.constructor!=Array) datafield.enum.item=[datafield.enum.item]
// iterate datafield.enum.item
;(function(){
  var $$obj = datafield.enum.item;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var item = $$obj[pug_index7];
if(item.hasOwnProperty("description") && item.description.hasOwnProperty("img")) item.description=item.description.img.$t
if (item.value) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
if (item.min) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.min) ? "" : pug_interp)) + " - " + (pug_escape(null == (pug_interp = item.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var item = $$obj[pug_index7];
if(item.hasOwnProperty("description") && item.description.hasOwnProperty("img")) item.description=item.description.img.$t
if (item.value) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
if (item.min) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.min) ? "" : pug_interp)) + " - " + (pug_escape(null == (pug_interp = item.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E";
}
if (datafield.range) {
pug_html = pug_html + "\u003Ctable\u003E\u003Ctr\u003E\u003Ctd\u003ERange\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.range.min) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.range.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
if (datafield.scale) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003EScale\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.scale.min) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.scale.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
else {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd colspan=\"3\"\u003EScale = Range\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
pug_html = pug_html + "\u003C\u002Ftable\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var datafield = $$obj[pug_index6];
var addcls= (datafield.reserved==undefined)?"":"reserved"
pug_html = pug_html + "\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd colspan=\"3\"\u003E";
if ((typeof datafield.data) == "string") {
pug_html = pug_html + (pug_escape(null == (pug_interp = datafield.data) ? "" : pug_interp));
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = datafield.reserved==undefined?"&nbsp;":"unused") ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.bitoffs) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.bitsize) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E";
pug_mixins["bitMask"](datafield,size);
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd colspan=\"3\"\u003E ";
if (datafield.enum && datafield.enum.item) {
pug_html = pug_html + "\u003Ch3\u003EEnum\u003C\u002Fh3\u003E\u003Ctable class=\"enum_table\"\u003E";
if(!datafield.enum.hasOwnProperty("item")) datafield.enum.item=[]
if(datafield.enum.item.constructor!=Array) datafield.enum.item=[datafield.enum.item]
// iterate datafield.enum.item
;(function(){
  var $$obj = datafield.enum.item;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var item = $$obj[pug_index8];
if(item.hasOwnProperty("description") && item.description.hasOwnProperty("img")) item.description=item.description.img.$t
if (item.value) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
if (item.min) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.min) ? "" : pug_interp)) + " - " + (pug_escape(null == (pug_interp = item.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var item = $$obj[pug_index8];
if(item.hasOwnProperty("description") && item.description.hasOwnProperty("img")) item.description=item.description.img.$t
if (item.value) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
if (item.min) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.min) ? "" : pug_interp)) + " - " + (pug_escape(null == (pug_interp = item.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E";
}
if (datafield.range) {
pug_html = pug_html + "\u003Ctable\u003E\u003Ctr\u003E\u003Ctd\u003ERange\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.range.min) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.range.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
if (datafield.scale) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003EScale\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.scale.min) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.scale.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
else {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd colspan=\"3\"\u003EScale = Range\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
pug_html = pug_html + "\u003C\u002Ftable\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var item = $$obj[index];
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E";
pug_mixins["condition"](item);
pug_html = pug_html + "\u003Cdiv" + (pug_attr("id", "case_"+index+"telegram", true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003Ctable class=\"data_table\"\u003E";
if(!Array.isArray(item.datafield)) item.datafield=[item.datafield]
item.datafield.sort((a,b)=>a.bitoffs-b.bitoffs)
var size = 1
if(parseInt(contents.rorg_number)==0xa5) size=4 
var last = item.datafield[item.datafield.length-1]
if(parseInt(contents.rorg_number)==0xd2) size=(last.bitoffs*1+last.bitsize*1)/8
pug_html = pug_html + "\u003Ctr\u003E\u003Cth\u003Eoffset\u003C\u002Fth\u003E\u003Cth\u003Esize\u003C\u002Fth\u003E\u003Cth\u003EBit mask\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
// iterate item.datafield
;(function(){
  var $$obj = item.datafield;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var datafield = $$obj[pug_index9];
var addcls= (datafield.reserved==undefined)?"":"reserved"
pug_html = pug_html + "\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd colspan=\"3\"\u003E";
if ((typeof datafield.data) == "string") {
pug_html = pug_html + (pug_escape(null == (pug_interp = datafield.data) ? "" : pug_interp));
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = datafield.reserved==undefined?"&nbsp;":"unused") ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.bitoffs) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.bitsize) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E";
pug_mixins["bitMask"](datafield,size);
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd colspan=\"3\"\u003E ";
if (datafield.enum && datafield.enum.item) {
pug_html = pug_html + "\u003Ch3\u003EEnum\u003C\u002Fh3\u003E\u003Ctable class=\"enum_table\"\u003E";
if(!datafield.enum.hasOwnProperty("item")) datafield.enum.item=[]
if(datafield.enum.item.constructor!=Array) datafield.enum.item=[datafield.enum.item]
// iterate datafield.enum.item
;(function(){
  var $$obj = datafield.enum.item;
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var item = $$obj[pug_index10];
if(item.hasOwnProperty("description") && item.description.hasOwnProperty("img")) item.description=item.description.img.$t
if (item.value) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
if (item.min) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.min) ? "" : pug_interp)) + " - " + (pug_escape(null == (pug_interp = item.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var item = $$obj[pug_index10];
if(item.hasOwnProperty("description") && item.description.hasOwnProperty("img")) item.description=item.description.img.$t
if (item.value) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
if (item.min) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.min) ? "" : pug_interp)) + " - " + (pug_escape(null == (pug_interp = item.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E";
}
if (datafield.range) {
pug_html = pug_html + "\u003Ctable\u003E\u003Ctr\u003E\u003Ctd\u003ERange\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.range.min) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.range.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
if (datafield.scale) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003EScale\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.scale.min) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.scale.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
else {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd colspan=\"3\"\u003EScale = Range\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
pug_html = pug_html + "\u003C\u002Ftable\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var datafield = $$obj[pug_index9];
var addcls= (datafield.reserved==undefined)?"":"reserved"
pug_html = pug_html + "\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd colspan=\"3\"\u003E";
if ((typeof datafield.data) == "string") {
pug_html = pug_html + (pug_escape(null == (pug_interp = datafield.data) ? "" : pug_interp));
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = datafield.reserved==undefined?"&nbsp;":"unused") ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.bitoffs) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.bitsize) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E";
pug_mixins["bitMask"](datafield,size);
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes([addcls], [true]), false, false)) + "\u003E\u003Ctd colspan=\"3\"\u003E ";
if (datafield.enum && datafield.enum.item) {
pug_html = pug_html + "\u003Ch3\u003EEnum\u003C\u002Fh3\u003E\u003Ctable class=\"enum_table\"\u003E";
if(!datafield.enum.hasOwnProperty("item")) datafield.enum.item=[]
if(datafield.enum.item.constructor!=Array) datafield.enum.item=[datafield.enum.item]
// iterate datafield.enum.item
;(function(){
  var $$obj = datafield.enum.item;
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var item = $$obj[pug_index11];
if(item.hasOwnProperty("description") && item.description.hasOwnProperty("img")) item.description=item.description.img.$t
if (item.value) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
if (item.min) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.min) ? "" : pug_interp)) + " - " + (pug_escape(null == (pug_interp = item.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var item = $$obj[pug_index11];
if(item.hasOwnProperty("description") && item.description.hasOwnProperty("img")) item.description=item.description.img.$t
if (item.value) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
if (item.min) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = item.min) ? "" : pug_interp)) + " - " + (pug_escape(null == (pug_interp = item.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (null == (pug_interp = item.description) ? "" : pug_interp) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E";
}
if (datafield.range) {
pug_html = pug_html + "\u003Ctable\u003E\u003Ctr\u003E\u003Ctd\u003ERange\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.range.min) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.range.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
if (datafield.scale) {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003EScale\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.scale.min) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = datafield.scale.max) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
else {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd colspan=\"3\"\u003EScale = Range\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
pug_html = pug_html + "\u003C\u002Ftable\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003Cdiv class=\"card raw\"\u003E\u003Cpre\u003E" + (null == (pug_interp = JSON.stringify(contents,null,2)) ? "" : pug_interp) + "\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"Teldata" in locals_for_with?locals_for_with.Teldata:typeof Teldata!=="undefined"?Teldata:undefined,"contents" in locals_for_with?locals_for_with.contents:typeof contents!=="undefined"?contents:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"submitter" in locals_for_with?locals_for_with.submitter:typeof submitter!=="undefined"?submitter:undefined,"t99" in locals_for_with?locals_for_with.t99:typeof t99!=="undefined"?t99:undefined));;return pug_html;}