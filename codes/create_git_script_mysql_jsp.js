const fs = require('fs')
const mysql = require('mysql')

var idnames = {
  "170104130140":"诸葛文丹",
  "170104130139":"朱倚佳",
  "170104130138":"朱嘉雯",
  "170104130137":"周翔",
  "170104130136":"周锦涛",
  "170104130135":"周传美",
  "170104130134":"郑丽群",
  "170104130133":"张虚平",
  "170104130132":"张朦",
  "170104130131":"张豪",
  "170104130130":"应晓云",
  "170104130129":"杨茂婷",
  "170104130128":"杨佳萍",
  "170104130127":"许晓倩",
  "170104130126":"徐星芳",
  "170104130125":"魏雄城",
  "170104130124":"施凌雁",
  "170104130123":"盛鑫窈",
  "170104130122":"慎晨",
  "170104130121":"沈燕芬",
  "170104130120":"钱佳贤",
  "170104130119":"潘苗苗",
  "170104130118":"潘晨健",
  "170104130117":"倪颖",
  "170104130116":"茅垚佳",
  "170104130115":"林彦君",
  "170104130114":"李丹婷",
  "170104130113":"华丹琦",
  "170104130112":"胡霞",
  "170104130111":"胡佩佩",
  "170104130110":"洪佳源",
  "170104130109":"洪灿亮",
  "170104130108":"方嘉明",
  "170104130107":"樊佳佳",
  "170104130106":"邓乐",
  "170104130105":"陈卓瑞",
  "170104130104":"陈玥伊",
  "170104130103":"陈羽丹",
  "170104130102":"陈士伟",
  "170104130101":"蔡峰炎",
  "160104100235":"袁玲",
  "160104100233":"尹嘉俊",
  "160104100229":"颜银梅",
  "160104100143":"朱逸菡",
  "160104100140":"张咪",
  "160104100111":"兰可伊"  
}

var db = mysql.createConnection({host:'www.mycourse.top', user:'cwf', password:'123456', database:'jsp2018'});

db.query('SELECT stuId, gitUrl FROM tb_users WHERE gitUrl <> ""', function(err, data){

  var filename1='./gitclone_jsp.sh'
  fs.writeFileSync(filename1, '#! /bin/bash\ncd /var/www/html/homework\n\n', {flag: 'w'}, function(err){
    if (err) {
      console.log (err)
    }
  })
  var filename2='./gitpull_jsp.sh'
  fs.writeFileSync(filename2, '#! /bin/bash\ncd /var/www/html/homework\n\n'+'echo "Start cron job for gitpull on"  $(date) >> /tmp/gitpull.log\n\n', {flag: 'w'}, function(err){
    if (err) {
      console.log (err)
    }
  })

  var filename3='./index_jsp.html'
  var header = ' \
  <!doctype html> \
  <html lang="en">\
    <head>\
      <meta charset="utf-8">\
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\
      <meta name="description" content="">\
      <meta name="author" content="">\
      <title>JSP作业</title>\
      <!-- Bootstrap core CSS -->\
      <link href="../css/bootstrap.min.css" rel="stylesheet">\
      <!-- Custom styles for this template -->\
      <link href="../css/grid.css" rel="stylesheet">\
    </head>\
    <body>\
      <div class="container">\
        <h1>JSP作业</h1>\
        <p class="lead">登记Git地址请<a href="http://www.mycourse.top:8080/helloworld/">访问这里</a>，务必勾选公开代码选项。</p>\
        <div class="row">'
  var footer = '\
        </div> \
        <br/>\
        <hr/>\
        <h4>常用软件:</h4>\
        <ul>\
        <li><a href="./softwares/npp.7.5.3.Installer.exe">NotePad++</a></li>\
        <li><a href="./softwares/node-v8.9.4-x64.msi">NodeJS</a></li>\
        <li><a href="./softwares/python-3.6.4-amd64.exe">Python3</a></li>\
        <li><a href="./softwares/MySQL-Front_Setup.exe">MySQL-Front 6.1</a></li>\
        <li><a href="./softwares/Git-2.19.1-64-bit.exe">Git for Windows</a></li>\
        <li><a href="./softwares/PortableGit-2.19.1-64-bit.7z.exe">Git for Windows Portable</a></li>\
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

  var students = data;

  for (var i=0; i < students.length; i++) {
    var ostr = `git clone ${students[i].gitUrl} ${students[i].stuId}\n`
    fs.writeFileSync(filename1, ostr, {flag: 'a'}, function(err){
      if (err) {
        console.log (err)
      }
    })
  }

  for (var i=0; i < students.length; i++) {
    var ostr = `cd ~/Desktop/2018jsp-homework/${students[i].stuId}` + ' && git pull\n'
    fs.writeFileSync(filename2, ostr, {flag: 'a'}, function(err){
      if (err) {
        console.log (err)
      }
    })
  }


  var ids = Object.keys(idnames)
  for (var i=0; i < ids.length; i++) {
    var submitted = false;
    var stu = null;
    var key = ids[i];
    for (var j=0; j < students.length; j++) {
      if (key == students[j].stuId) {
        submitted = true;
        stu = students[j];
        break;
      }
    }
    if (submitted == true) {
      body += `<div class="col-6 col-sm-3 col-md-2"><a href="./homework/${ids[i]}">${ids[i]}<br>${idnames[ids[i]]}</a>&nbsp;<a href="${stu.gitUrl}" target="_blank">Git>></a></div>`
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
})

db.end()