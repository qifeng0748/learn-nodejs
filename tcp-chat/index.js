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
    var count = 0,
        users = {},
        nickname;

    conn.write(
        '\n > wlecome to \033[92mnode-chat\033[39m!' +
        '\n > ' + count + ' other people are connected at this time.' +
        '\n > please write your name and press enter: '
    );

    count++;

    conn.setEncoding('utf8');

    conn.on('close', function() {
        count--;
        delete users[nickname];

        broadcast('\033[90m > ' + nickname + ' left room\033[39m\n');
    });

    conn.on('data', function(data) {
        data = data.replace('\r\n', '');

        if(!nickname) {
            if(users[nickname]) {
                console.log('\033[93m> nickname already in ues, try again\033[39m\n');
            } else {
                nickname = data;
                users[nickname] = conn;

                broadcast('\033[90m > ' + nickname + ' joined the room\033[39m\n');
            }
        } else {
            broadcast('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true);
        }
    });

    function broadcast(msg, exceptMyself) {
        for(var i in users) {
            if(!exceptMyself || i != nickname) {
                users[i].wirte(msg);
            }
        }
    }
});

server.listen(3000, function() {
    console.log('\033[96m    server listening on *:3000\033[39m');
});
