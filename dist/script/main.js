window.addEventListener("load",function(){
  console.log(EEP)
  EEP.case.forEach(function(c,i){
    var size=1
    if(parseInt(EEP.rorg_number)==0xa5) size=4
    var t1= new Teldata(size)
    var s1 = new Teldata(1)
    if(c.condition!=undefined && c.condition.statusfield!=undefined){
      c.condition.statusfield.forEach(function(x){
        s1.setBits(x.bitoffs*1,x.bitsize*1,x.value*1)
      })
    }
    if(c.datafield!=undefined){
      if(!Array.isArray(c.datafield)) c.datafield=[c.datafield]
      c.datafield.forEach(function(x){
        if(x.reserved==undefined){
          if(!Array.isArray(x.enum.item)) x.enum.item=[x.enum.item]
          if(x.enum.item.length>0){
            var v = x.enum.item[Math.floor(Math.random()*x.enum.item.length)]
            if(v.min!=undefined){
              var v1= v.min*1+Math.floor(Math.random()*(v.max*1-v.min*1))
              t1.setBits(x.bitoffs*1,x.bitsize*1,v1)
            }else{
              t1.setBits(x.bitoffs*1,x.bitsize*1,v.value*1)
            }
          }
        }
      })
    }
    var tel = `${parseInt(EEP.rorg_number).toString(16)}${t1.toString()}xxxxxxxx${s1.toString()}`

    document.querySelector("#case_"+i+"telegram").innerHTML=`<span>${parseInt(EEP.rorg_number).toString(16)}</span><span>${t1.toString()}</span><span>xxxxxxxx</span><span>${s1.toString()}</span>`
document.querySelector("#case_"+i+"telegram").innerHTML+="("+ pad(t1.toString(2),8)+")"
document.querySelector("#case_"+i+"telegram").innerHTML+=`<pre>${JSON.stringify(decode(tel,EEP),null,2)}</pre>`

  })
})


function decode(tel,eep){
  var size=1
  var ret=""
  if(tel.substring(0,2)=="a5") size=4
  if(size=1){
    var status=parseInt(tel.substring(12,14))
    if(!Array.isArray(eep.case))eep.case=[eep.case]
    eep.case.forEach(function(item){
      if(item.condition!=undefined && item.condition.statusfield!=undefined){
        var s1=new Teldata(1)
        s1.setSingleBit(item.condition.statusfield[0].bitoffs*1,item.condition.statusfield[0].value*1)
        s1.setSingleBit(item.condition.statusfield[1].bitoffs*1,item.condition.statusfield[1].value*1)
        if(s1.toString()==status){
          ret = decodeRPS(tel.substr(2,2),item)
        }
      }else{
        ret = decodeRPS(tel.substr(2,2),item)
      }
    })
    return ret
  }
}

function decodeRPS(data,c){
  var ret = []
  var databin = pad(parseInt(data,16).toString(2),8)
  c.datafield.forEach(function(item){
    var bin2 = databin.substr(item.bitoffs*1,item.bitsize*1)
    var val =  parseInt(bin2,2)
    if(item.enum!=undefined && item.enum.item!=undefined){
      for(var i = 0;i<item.enum.item.length;i++){
        if(item.enum.item[i].value==val){
          ret.push({name:item.data,value:val,desc:item.enum.item[i].description,unit:""})
        }
      }

    }
  })
  return ret
}

function Teldata(bytes){
  this.bits=""
  for(var i = 0;i<bytes*8;i++){
    this.bits+="0"
  }
  this.setSingleBit = function(index,value){
    if(value>1) console.log("!")
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
function pad (num,size) {
    var s = "00000000000000000000000000000000" + num;
    return s.substr(s.length-size);
  }
