const fs = require('fs').promises

const context = "점심 뭐 먹지?"

//promise 형태의 사용법
fs.whiteFile('text.txt', context, 'utf8')
    .then(() => {
        console.log("파일 쓰기 완료")
    }).catch((err) => {
        console.error(err)
    })

// async awit
async function writeFile(path, context) {
    try {
        await fs.writeFile(path, context, 'utf8');
        console.log('파일 쓰기 완료');
      } catch(err) {
        console.error('파일 쓰기 실패', error);
      }
    }
    
  
