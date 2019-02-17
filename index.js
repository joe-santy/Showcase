var express = require('express');
var path = require('path');
var fse = require('fs-extra');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'images')));

app.get('/', function(req, res){
  res.write('<head>');
  res.write('<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">');
  res.write('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>');
  res.write('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>');
  res.write('</head>');
  res.write('<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"><a class="navbar-brand" href="#">Pictures</a></nav>');
  fse.readdir(path.join(__dirname, 'images'), function(err, files){
    if (err){console.error(err);} else{
      res.write('<div class="row bg-dark">');
      files.forEach(function(file){
        res.write('<div class="col-lg-4"><div class="container"><img style="max-width:100%; height:auto; object-fit:contain; margin:5%;"  src=' + file + '></div></div>');
      });
      res.write('</div>');
    }
  });
});

app.listen(8080);
console.log('Server running on port 8080');
