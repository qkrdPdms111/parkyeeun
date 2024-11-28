const fs=require('fs');

// console.log('시작');
// fs.readFile('./sample.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('1번', data.toString()) // 주어진 시간(3초)이 없어도, 이 친구가 비동기여서 task queue에 가는 이상 함수가 끝난 후에 실행된다. 
// })
// console.log('끝')


// console.log('시작');

// (async () =>{
//     try{
//         const data1 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('1번', data1.toString());
//         const data2 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('2번', data2.toString());
//         const data3 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('3번', data3.toString());
//         const data4 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('4번', data4.toString());

//     }catch (err) {
//         console.error('에러 발생', err);

//     }finally {
//         console.log('끝');
//     }

// })();

// fs.readFile('./sample.txt', (err, data) => {
//     if (err) {throw err}
//     console.log('1번', data.toString())
// });

// fs.readFile('./sample.txt', (err, data) => {
//     if (err) {throw err}
//     console.log('2번', data.toString())
// });

// fs.readFile('./sample.txt', (err, data) => {
//     if (err) {throw err}
//     console.log('3번', data.toString())
// });

// fs.readFile('./sample.txt', (err, data) => {
//     if (err) {throw err}
//     console.log('4번', data.toString())
// });



const data1 = fs.readFileSync('./sample.txt', 'utf8');
console.log('1번', data1.toString());


const data2 = fs.readFileSync('./sample.txt', 'utf8');
console.log('2번', data2.toString());


const data3 = fs.readFileSync('./sample.txt', 'utf8');
console.log('3번', data3.toString());


const data4 = fs.readFileSync('./sample.txt', 'utf8');
console.log('4번', data4.toString());