const crypto = require('crypto')

const token = crypto.randomBytes(256).toString('hex');

module.exports = {
uri:'mongodb://localhost:27017/' + this.db,
secret:token,
db:'mean-angular'
}  