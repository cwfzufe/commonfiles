const fs = require('fs')
var students = [
  "180110910701", "https://git.coding.net/cailibuhong/180110910701.git",
  "180110910702", "https://git.coding.net/jiuyuechuliang/180110910702.git",
  "180110910703", "https://git.coding.net/Kendoist/180110910703.git",
  "180110910704", "https://git.coding.net/ch8579837/180110910704.git",
  "180110910706", "https://github.com/chenmengjiao/180110910706.git",
  "180110910707", "https://git.dev.tencent.com/dtid_69d96cb3a1fd9b66/mm.git",
  "180110910708", "https://git.dev.tencent.com/gnn15967735310/180110910708.git",
  "180110910711", "https://git.dev.tencent.com/hfxp/180110910711.git",
  "180110910712", "https://git.dev.tencent.com/a735582174/hch.git",
  "180110910715", "https://git.dev.tencent.com/meng_jin/180110910715.git",
  "180110910721", "https://git.dev.tencent.com/liu-lang/180110910721.git",
  "180110910722", "https://git.dev.tencent.com/RX180110910722/180110910722.git",
  "180110910723", "https://git.dev.tencent.com/T180110910723/180110910723.git",
  "180110910724", "https://git.dev.tencent.com/duangbiu/180110910724.git",
  "180110910726", "https://git.coding.net/counsequnce/180110910726.git",
  "180110910727", "https://git.dev.tencent.com/xiaoyi0427/firstone.git",
  "180110910728", "https://git.coding.net/glacier45/123.git",
  "180110910729", "https://git.dev.tencent.com/a180110910729/180110910729.git",
  "180110910731", "https://git.coding.net/yjhyxaa/yjhyx.git",
  "180110910732", "https://git.dev.tencent.com/zzw-yh/180110910732.git",
  "180110910733", "https://git.dev.tencent.com/leonard02/180110910733.git",
  "180110910734", "https://git.coding.net/laiheliu/weilaihenyouxiu.git",
  "180110910736", "https://git.dev.tencent.com/Drowsy_Z/180110910736.git",
  "180110910737", "https://git.coding.net/zhengfu/zhengfu_new.git",
  "180110910738", "https://git.dev.tencent.com/dtid_968764b081b447be/asdfasf.git",
  "180110910739", "https://git.coding.net/qcloudabe77d/1234.git",
  "180110910740", "https://git.dev.tencent.com/zhuIrving/180110910740.git",
  "180110910804", "https://git.dev.tencent.com/theAhnoo/laozongzhenlaji.git",
  "180110910805", "https://git.dev.tencent.com/shenshuoyao/123152456.git",
  "180110910806", "https://git.dev.tencent.com/CHEN1412362876/180110910806.git",
  "180110910808", "https://git.dev.tencent.com/cyx19991019/180110910808cyx.git",
  "180110910809", "https://git.dev.tencent.com/csk___/0001.git",
  "180110910810", "https://git.coding.net/diyanqinsss/180110910810.git",
  "180110910811", "https://git.coding.net/hutingwen/180110910811.git",
  "180110910812", "https://git.dev.tencent.com/hlm1212/180110910812.git",
  "180110910813", "https://git.dev.tencent.com/hanae/180110910813.git",
  "180110910814", "https://git.dev.tencent.com/isamura/180110910814.git",
  "180110910815", "https://git.dev.tencent.com/liangzhaohui/180110910815.git",
  "180110910816", "https://git.dev.tencent.com/ljylfl/180110910816.git",
  "180110910817", "https://git.dev.tencent.com/wdqlyw/180110910817.git",
  "180110910818", "https://git.coding.net/lycono/180110910818.git",
  "180110910821", "https://git.dev.tencent.com/jiandenglong/s888.git",
  "180110910823", "http://git.dev.tencent.com/sqssq/180110910823.git",
  "180110910825", "https://git.dev.tencent.com/syjkby/zuoye.git",
  "180110910828", "https://git.dev.tencent.com/JingRann/180110910828.git",
  "180110910829", "https://git.dev.tencent.com/dtid_9885fcee3e96ba9a/2018.11.23-1.git",
  "180110910833", "https://git.dev.tencent.com/yydlrb/yy.git",
  "180110910835", "https://git.dev.tencent.com/dtid_84416bb0aa2c989d/180110910835.git",
  "180110910836", "https://git.dev.tencent.com/yyj2018/zuoye1-yyj.git",
  "180110910837", "https://git.coding.net/w180110910837/180110910837.git",
  "180110910839", "https://git.dev.tencent.com/zl180110910839/180110910839.git",
]

var idnames = {
	"160104200226":"肖杰",
	"180110910701":"蔡李洪",
	"180110910702":"曹明月",
	"180110910703":"陈超凡",
	"180110910704":"陈涵",
	"180110910705":"陈景晗",
	"180110910706":"陈梦娇",
	"180110910707":"冯馨瑶",
	"180110910708":"葛宁宁",
	"180110910709":"韩佳芮",
	"180110910710":"何俊霖",
	"180110910711":"皇甫旭平",
	"180110910712":"黄诚浩",
	"180110910713":"吉晓喆",
	"180110910714":"杰续华",
	"180110910715":"金孟",
	"180110910716":"雷元昺",
	"180110910717":"李家诚",
	"180110910718":"李心旖",
	"180110910719":"娄行昂",
	"180110910720":"沈佳煜",
	"180110910721":"施盈帆",
	"180110910722":"孙睿欣",
	"180110910723":"汤鹏博",
	"180110910724":"陶李艳",
	"180110910725":"王鹏",
	"180110910726":"王婷婷",
	"180110910727":"肖易",
	"180110910728":"谢琬滢",
	"180110910729":"余望之",
	"180110910730":"余晏吉",
	"180110910731":"俞洁",
	"180110910732":"占周文",
	"180110910733":"张纪霖",
	"180110910734":"张欣",
	"180110910735":"张志麟",
	"180110910736":"赵佳蕾",
	"180110910737":"郑府",
	"180110910738":"郑濯沅",
	"180110910739":"周珊珊",
	"180110910740":"朱正楷",
	"180110910801":"阿尔曼江·吐鲁洪",
	"180110910802":"蔡海心",
	"180110910803":"曹天榕",
	"180110910804":"陈骏",
	"180110910805":"陈灵韬",
	"180110910806":"陈其涛",
	"180110910807":"陈潇",
	"180110910808":"陈远翔",
	"180110910809":"崔少坤",
	"180110910810":"狄彦琴",
	"180110910811":"胡婷雯",
	"180110910812":"黄丽美",
	"180110910813":"李锦祺",
	"180110910814":"梁盛泓",
	"180110910815":"梁照晖",
	"180110910816":"刘洁英",
	"180110910817":"陆伊雯",
	"180110910818":"吕丛林",
	"180110910819":"倪璐珊",
	"180110910820":"邱骋洋",
	"180110910821":"阮烨涛",
	"180110910822":"尚海涵",
	"180110910823":"石青",
	"180110910824":"孙羽",
	"180110910825":"孙雨洁",
	"180110910827":"王宝泽",
	"180110910828":"王苗苗",
	"180110910829":"魏丽杰",
	"180110910830":"谢文硕",
	"180110910831":"杨龙瀚",
	"180110910832":"杨千旭",
	"180110910833":"杨悦",
	"180110910834":"杨振东",
	"180110910835":"杨智涵",
	"180110910836":"叶昱颉",
	"180110910837":"张碧月",
	"180110910838":"张铮年",
	"180110910839":"章靓",
  "180110910840":"朱骁"
}

var filename1='./gitclone.sh'
fs.writeFileSync(filename1, '#! /bin/bash\ncd /var/www/html/homework\n\n', {flag: 'w'}, function(err){
  if (err) {
    console.log (err)
  }
})
var filename2='./gitpull.sh'
fs.writeFileSync(filename2, '#! /bin/bash\ncd /var/www/html/homework\n\n'+'echo "Start cron job for gitpull on"  $(date) >> /tmp/gitpull.log\n\n', {flag: 'w'}, function(err){
  if (err) {
    console.log (err)
  }
})

var filename3='./index.html'
var header = ' \
<!doctype html> \
<html lang="en">\
  <head>\
    <meta charset="utf-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\
    <meta name="description" content="">\
    <meta name="author" content="">\
    <title>前端开发技术作业</title>\
    <!-- Bootstrap core CSS -->\
    <link href="../css/bootstrap.min.css" rel="stylesheet">\
    <!-- Custom styles for this template -->\
    <link href="../css/grid.css" rel="stylesheet">\
  </head>\
  <body>\
    <div class="container">\
      <h1>前端开发技术作业</h1>\
      <p class="lead">每个整点更新一次。</p>\
      <div class="row">'
var footer = '\
      </div> \
      <br/>\
      <hr/>\
      <h4>常用软件:</h4>\
      <ul>\
      <li><a href="./npp.7.5.3.Installer.exe">NotePad++</a></li>\
      <li><a href="./node-v8.9.4-x64.msi">NodeJS</a></li>\
      <li><a href="./python-3.6.4-amd64.exe">Python3</a></li>\
      <li><a href="./MySQL-Front_Setup.exe">MySQL-Front 6.1</a></li>\
      <li><a href="./PortableGit-2.19.1-64-bit.7z.exe">Git for Windows Portable</a></li>\
      <li><a href="https://yk3.gokuai.com/file/20h7w1cn#">Softwares for JavaWeb Development</a></li>\
      </ul>\
    </div> <!-- /container -->\
  </body>\
</html>'
var body = ''
fs.writeFileSync(filename3, header, {flag: 'w'}, function(err){
  if (err) {
    console.log (err)
  }
})

for (var i=0; i < students.length/2; i++) {
  var ostr = `sudo git clone ${students[i*2+1]} ${students[i*2]}\n`
  fs.writeFileSync(filename1, ostr, {flag: 'a'}, function(err){
    if (err) {
      console.log (err)
    }
  })
}

for (var i=0; i < students.length/2; i++) {
  var ostr = `cd /var/www/html/homework/${students[i*2]}` + ' && sudo git pull\n'
  fs.writeFileSync(filename2, ostr, {flag: 'a'}, function(err){
    if (err) {
      console.log (err)
    }
  })
}


var ids = Object.keys(idnames)
for (var i=0; i < ids.length; i++) {
  var submitted = false;
  var key = ids[i];
  for (var j=0; j < students.length/2; j++) {
    if (key == students[j*2]) {
      submitted = true;
      break;
    }
  }
  if (submitted == true) {
    body += `<div class="col-6 col-sm-3 col-md-2"><a href="./homework/${ids[i]}">${ids[i]}<br>${idnames[ids[i]]}</a></div>`
  } else {
    body += `<div class="col-6 col-sm-3 col-md-2">${ids[i]}<br>${idnames[ids[i]]}</div>`
  }
  
}

console.log(Object.keys(idnames).length)

fs.writeFileSync(filename3, body, {flag: 'a'}, function(err){
  if (err) {
    console.log (err)
  }
})
fs.writeFileSync(filename3, footer, {flag: 'a'}, function(err){
  if (err) {
    console.log (err)
  }
})