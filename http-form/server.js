/**
 * Created by HG on 15/08/27.
 */
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/html'
    });

    res.end([
        '<html><head><meta charset="utf-8"></head>'+
        '<body><form method="post" action="/url">' +
        '    <h1>My form</h1>' +
        '    <fieldset>' +
        '        <legend>个人信息</legend>' +
        '        <p>你叫什么名字？</p>' +
        '        <input type="text" name="name">' +
        '        <p><button>提交</button></p>' +
        '    </fieldset>' +
        '</form></body></html>'
    ].join(''));
}).listen(3000);