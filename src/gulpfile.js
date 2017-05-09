const gulp = require("gulp")
const less = require("gulp-less")
const postcss = require("gulp-postcss")
const cssnano = require("cssnano")
const cssnext = require("postcss-cssnext")
const connect = require("gulp-connect")
const path = require("path")
const wrap = require("gulp-wrap")
const rename = require("gulp-rename")
const jedit = require("gulp-json-editor")

const submitter = require("./meta/submitter.json")
const alleep = require("../eep.json")

function Teldata(bytes){
  this.bits=""
  for(var i = 0;i<bytes*8;i++){
    this.bits+="0"
  }
  this.setSingleBit = function(index,value){
    this.bits=this.bits.substr(0,index*1) + value*1 + this.bits.substr(index*1+1);
  }
  this.setBits = function(index,length,value){
    var binValue = pad(value.toString(2),length)
    for(var i = 0;i<length;i++){
      this.setSingleBit(index+i,binValue[i])
    }
  }
  this.toSVG=function(){
    var b = this.toString(2)
    var st=`<svg width="${b.length*4}px" height="1em">`
    for(var i = 0;i<b.length;i++){
      st+=`<rect x="${i*4}" y="0" width="4" height="100%" class="${b[i]==1?"bit_set":"bit_unset"}"/>`
    }
    return st+"</svg>"
  }
  this.toString=function(base){
    var out=""
    if(base===undefined) base=16
    for(var i=0;i<this.bits.length;i+=8){
      var currentbyte = parseInt(this.bits.substr(i,8),2)
      switch(base){
        case 16:
          out+=pad(currentbyte.toString(base),2)
          break
        case 2:
          out+=pad(currentbyte.toString(base),8)
          break
        case 10:
          out+=pad(currentbyte.toString(base),3)
          break
      }
    }
    return out
  }
  function pad (num,size) {
      var s = "00000000000000000000000000000000" + num;
      return s.substr(s.length-size);
    }
}



gulp.task("less",function(done){
  var plugins = [
        cssnext({browsers: ['last 2 version']}),
        cssnano()
    ];
  gulp.src("./less/main.less")
  .pipe(less())
  .pipe(postcss(plugins))
  .pipe(gulp.dest('../dist/css'))
  .pipe(connect.reload())
  .on("end",done)
})

gulp.task("eep",function(done){
  gulp.src("./eep/*.json")
  .pipe(wrap({src:"./pug/eep.pug"},{submitter:submitter,alleep:alleep,Teldata:Teldata},{engine:"pug",basedir:__dirname+"/pug"}))
  .pipe(rename({extname:'.html'}))
  .pipe(gulp.dest("../dist/eep/"))
  .pipe(connect.reload())
  .on("end",done).on("error",()=>null)
})

gulp.task("watch",function(){
  connect.server({
        root:path.join(__dirname,"../dist/"),
        livereload: true
    });
  gulp.watch("./less/main.less",['less'])
  gulp.watch("./pug/*.pug",['eep'])
})

gulp.task("fix_submitter",function(){
  var submitterlist=[]
  gulp.src("./eep/*.json")
  .pipe(jedit(function(json){
    if(!Array.isArray(json.case) && json.case!=undefined) json.case=[json.case]
    var t = (typeof json.description)
    if(t=="object") json.description=""
    if(json.description==undefined) json.description=""
    if(json.hasOwnProperty("description") && json.description.includes("Submitter:")) {
      json.submitter=json.description.split("Submitter:")[1].split("<")[0]
      json.description=json.description.split("Submitter:"+json.submitter+"</span>")[1]

    }
    if(!Array.isArray(json.submitter)){
      if(json.submitter==undefined) json.submitter=""
      if(json.submitter.split("/").length>1){
        json.submitter=json.submitter.split("/")
      }else{
        json.submitter=[json.submitter]
      }
    }else{
      if(json.submitter[0].includes("NTT")){
        var t=json.submitter[0].split(",")
        json.submitter=[t[0],t[1]]
      }
      json.submitter.forEach(function(itm,i){
        json.submitter[i] = itm.trim()
        if(itm=="") json.submitter=[]
      })
    }

    return json
  }))
  .pipe(gulp.dest("./eep/"))
})

gulp.task("consolidate",function(){
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
})

gulp.task("setBits",function(){
  var t1=new Teldata(4)

  for(var i = 0; i<16;i++){
    t1.setSingleBit(i,1)
  }

  console.log(t1.toString(),t1.toString(2))


})
gulp.task('default',['less','eep','watch'])
