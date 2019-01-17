var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: "/tmp/" }).array('image'));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
})
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname+'/index.html');
})

app.get('/uploadfile.html', function (req, res) {
    res.sendFile(__dirname+'/uploadfile.html');
})

app.post('/file_upload', (req, res) => {
    console.log("....... 上传文件信息 ", req.files[0]);

    var des_file = __dirname + "/uploadfiles/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, (error, data) => {

        if(error){
            console.log("读取文件异常！ "+error.stack);
            return;
        }

        fs.writeFile(des_file, data, (err) => {
            if (err) {
                console.log("写入文件失败：" + err.stack);
            }
            else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                }
            }
            res.end( JSON.stringify( response ) );
        })
    })
})

var server = app.listen(8888, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("Server running at http://%s:%s", host, port)
   
  })