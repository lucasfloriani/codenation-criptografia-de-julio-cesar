const fs = require('fs')

exports.createOrUpdateFile = (name, content) => fs.writeFileSync(name, content)
