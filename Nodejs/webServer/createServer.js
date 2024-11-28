const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf8'
});
    res.write('<h1>Hello</h1>');
    res.end('<p>Node Server</p>');
})
    .listen(8080, () => { // 서버 연결  
    console.log ('8080번 포트에서 서버 대기 중입니다');
});


http.createServer((req, res) =>{
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf8'
});
    res.write('<h1>Hello</h1>');
    res.end('<p>Welcome 8081</p>');
})
    .listen(8081, () => { // 서버 연결  
    console.log ('8081번 포트에서 서버 대기 중입니다');
});
