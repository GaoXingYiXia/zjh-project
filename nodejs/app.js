let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let cookieSession = require('cookie-session');
let logger = require('morgan');
let multer = require('multer');
let bodyParser = require('body-parser');
let consolidate = require('consolidate')
let mysql = require('mysql')
let mongodb = require('mongodb')
let json = require('./public/js/json')
let goods = require('./public/js/goods')
//配置服务器
let app = express();

let index = require('./routes/index');
let users = require('./routes/users');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);
app.use('/users', users);

cookieSession
let arr = [];
for (let i = 0; i < 10000; i++) {
    arr[i] = 'asdfsdf' + Math.random() * 10000
}

app.use(cookieSession({
    name: 'sess_id',
    keys: arr,
    // maxAge: 3000
    maxAge: 1000 * 604800 //7天
}));




// 自动建立一个数据库(用于模拟数据库已存在的情况)
let db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root123',
})
db.connect();
db.query(`use mydb`, (err, data) => {
    if (err != null) {
        db.query(`create database mydb character set utf8`, (err, data) => {
            db.query(`use mydb`);
            db.query(`show columns from goods`, (err, data) => {
                if (err != null) {
                    db.query('create table goods(goodsid int unsigned auto_increment primary key,img varchar(300),name varchar(300),weixin varchar(300),ranking varchar(300),qb varchar(300))', (err, data) => {
                        console.log('数据表goods建立完成');
                        for (let k = 0; k < json.length; k++) {
                            db.query(`INSERT INTO goods(goodsid,img,name,weixin,ranking,qb) VALUES('${json[k].goodsid}','${json[k].img}','${json[k].name}','${json[k].weixin}','${json[k].ranking}','${json[k].qb}')`, (err, data) => {})
                        }
                    })
                }
            })
            db.query(`show columns from myproject`, (err, data) => {
                if (err != null) {
                    db.query('create table myproject(goodsid int unsigned auto_increment primary key,img varchar(300),text varchar(300),Keyword1 varchar(300),Keyword2 varchar(300),Keyword3 varchar(300),special1 varchar(300),special2 varchar(300),mtnum varchar(300))', (err, data) => {
                        console.log('数据表myproject建立完成');
                        for (let k = 0; k < goods.length; k++) {
                            db.query(`INSERT INTO myproject(goodsid,img,text,Keyword1,Keyword2,Keyword3,special1,special2,mtnum) VALUES('${goods[k].goodsid}','${goods[k].img}','${goods[k].text}','${goods[k].Keyword1}','${goods[k].Keyword2}','${goods[k].Keyword3}','${goods[k].special1}','${goods[k].special2}','${goods[k].mtnum}')`, (err, data) => {})
                        }
                    })
                }
            })
            db.query(`show columns from name`, (err, data) => {
                if (err != null) {
                    db.query('create table name(ID int unsigned auto_increment primary key,user varchar(300),password varchar(300),goods varchar(300))', (err, data) => {
                        console.log('数据表name建立完成');
                    })
                }
            })
        })
    }
})




function dbmyproject(id, res, project) {
    db.query(`show columns from myproject`, (err, data) => {
        if (err == null) {
            db.query(
                `SELECT * FROM myproject where goodsid=${id}`,
                (err, result) => {
                    if (err) throw err;
                    project.push(result[0])     
                }
            )
        }
    })
}
//获取数据  -------------------------购物车数据----------------------------------
app.use('/goods', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin); //允许跨越
    res.setHeader('Access-Control-Allow-Credentials', true);
    let data = req.method == 'GET' ? req.query : req.body;
    let project = [];
    // console.log(data.id);
    data.id.forEach(item=> {
        dbmyproject(item, res, project)
    });
    let projecttime = setTimeout(() => {
         res.send(project) 
        clearTimeout(projecttime)
    }, 16);
})


// //注 ：表name中 goods应为对象｛ goodsid：[x,xx,xxx,xxxx]}

let sql = {};
//从数据库中获取用户账户 和 密码
function dbquery() {
    db.query(`show columns from name`, (err, data) => {
        if (err == null) {
            db.query(
                `SELECT * FROM name`,
                (err, result) => {
                    if (err) throw err;
                    for (let i = 0; i < result.length; i++) {
                        sql[result[i].user] = result[i].password;
                    }
                    // console.log(sql);
                }
            )
        }
    })
}
//登录 + 注册
app.use('/ajx', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin); //允许跨越
    res.setHeader('Access-Control-Allow-Credentials', true);
    let data = req.method == 'GET' ? req.query : req.body;
    switch (data.act) {
        case 'changepassword':
            console.log(data);
            if (data.password == '' || data.user == '') {
                return res.send('1')
            } else if (data.password != data.password2) {
                return res.send('2')
            } else {
                db.query(`UPDATE name  SET password='${data.password}' WHERE user=${data.user}`)
                return res.send('0')
            }
            
            // db.query(`INSERT INTO  name(user,password) VALUES('${data.user}','${data.password}')`)
            break;
        case 'ssave':
            //不保存session
            if (data.ssave != 'true') {
                let ssavetime = setTimeout(() => {
                    req.session['user'] = undefined;
                    req.session['password'] = undefined;
                    res.send(req.session) //必须要加
                    clearTimeout(ssavetime)
                }, 16);
            }
            break;
        case 'showlogin':
            res.send(req.session)
            break;
        case 'login':
            // console.log(data);
            dbquery();
            let logintime = setTimeout(() => {
                if (sql[data.user]) {
                    if (sql[data.user] == data.password) {
                        console.log('登录成功');
                        req.session['user'] = data.user;
                        req.session['password'] = data.password;
                        res.send('0');    
                    } else {
                        console.log('用户名或者密码有误');
                        res.send('1')
                    }
                } else {
                    console.log('用户名不存在');
                    res.send('2')
                }
                clearTimeout(logintime)
            }, 16);
            break;
        case 'reg':
            dbquery();
            let regtime = setTimeout(() => {
                if (sql) {
                    if (data.password == '' || data.user == '') {
                        return res.send('1')
                    } else if (data.password != data.password2) {
                        return res.send('2')
                    } else {
                        if (sql[data.user]) {
                            return res.send('0')
                        } else {
                            // sql[data.user] = data.password;
                            db.query(`INSERT INTO  name(user,password) VALUES('${data.user}','${data.password}')`)
                            return res.send('3')
                        }
                    }
                }
                clearTimeout(regtime)
            }, 16)
            break;
        case 'tuichu':
            //删除session
            req.session['user'] = undefined;
            req.session['password'] = undefined;
            res.send(req.session) //必须要加
            break;
        default:
            res.send('代码有误');
            break;
    }
    console.log(req.session);
})




app.use('/', (req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use('/', (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.ejs');
});
module.exports = app;