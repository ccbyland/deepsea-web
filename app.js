// 依赖加载
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var ejs = require('ejs');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/routes.js');// 加载路由控制

// 创建项目实例
var app = express();

// 定义模板
app.set('views', path.join(__dirname, './views'));

/**
 * 注册模板引擎用来处理html扩展名的文件
 */
app.engine('.html', ejs.__express);

app.set('view engine', 'html');

//定义icon图标
//app.use(favicon(__dirname+ '/public/favicon.ico'));

// 定义日志输出级别
app.use(logger('dev'));

// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 定义cookie解析器
app.use(cookieParser());

// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 匹配路由
routes(app);

// 404错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//开发环境，500错误处理和错误堆栈跟踪
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// 生产环境，500错误处理
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// 定义输出模块接口
module.exports = app;