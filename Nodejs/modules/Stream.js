const fs = require('fs');
const { writer } = require('repl');

// const readStream = fs.createReadStream('./chunks.txt', {highWaterMark:16})
// const data = []

// readStream.on('data', (chunk)=>{
//     data.push(chunk);
//     console.log('data :', chunk.toString(), chunk.length)
// });

// readStream.on('end', ()=>{
//     console.log('end:', Buffer.concat(data).toString())
// });

// readStream.on('error', (err)=>{
//     console.log('error:', err)
// });

// const writeStream = fs.createWriteStream('./진달래꽃.txt')
// writeStream.on('finish', ()=>{
//     console.log('파일 쓰기 완료')
// })



// writeStream.write('나보기가 역겨워 가실때에는\n')
// writeStream.write('말없이 고이 보내 드리오리다\n')
// writeStream.write('영변에 약산 진달래꽃\n')
// writeStream.write('아름따다 가실길에 뿌리오리다\n')
// writeStream.write('말없이 고이 보내 드리오리다\n')
// writeStream.end()

const readStream = fs.createReadStream('진달래꽃.txt');
const writeStream = fs.createWriteStream('./jin.txt')

readStream.pipe(writeStream)

