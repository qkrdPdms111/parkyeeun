const crypto = require('crypto')

const hash = crypto.createHash('sha256').update('abcdefghijklmnop').digest('hex');
const hash2 = crypto.createHash('sha256').update('a').digest('hex');
console.log(hash)
console.log(hash2)

crypto.pbkdf2('abcdefghijklmnop', 'addsalt', 100000, 64, 'sha512', (err, derivedkey) => {
    if (err) throw err;
    console.log(derivedkey.toString('hex'))
})

const algorith = 'aes-256-cbc'
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//
const cipher = crypto.createCipheriv(algorith, key, iv)
let encrypted = cipher.update('strongpassword', 'utf8', 'base64')
encrypted += cipher.final('base64');

//
const decipher = crypto.createCipheriv(algorith, key, iv)
let decrypted = decipher.update(encrypted, 'base64', 'utf8')
decrypted += decipher.final('utf8')

console.log(encrypted)
console.log(decrypted)
console.log(key)