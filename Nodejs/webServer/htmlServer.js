const http = require('http');
const fs = require('fs').promises ;

http.createServer(async (req, res) => {
    //http를 보내주는 fs를 만들어 줄 것. 
    try{
        const data = await fs.readFile('./index.html')  // 파일 읽어오기. 
        res.writeHead(200, {'Content-Type' : 'text/html; charset = utf8' }); // (응답번호 설정, 내용)
        res.end(data); // (안에 있는거 출력하고)리스폰스 끝났다.
    }
    catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type' : 'text/html; charset = utf8' });
        res.end();
    }
}).listen(8080, ()=> {
    console.log('htmlServer가동중')
})