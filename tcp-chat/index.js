/**
 * 模块依赖
 */
var net = require('net');

/**
 * 记录连接数
 */
var count = 0;

/**
 * 创建服务
 */
var server = net.createServer(function(conn) {
    conn.write(
        '\n > wlecome to \033[92mnode-chat\033[39m!' +
        '\n > ' + count + ' other people are connected at this time.' +
        '\n > please write your name and press enter: '
    );

    conn.on('close', function() {
        count--;
    });

    count++;
});

server.listen(3000, function() {
    console.log('\033[96m    server listening on *:3000\033[39m');
});

