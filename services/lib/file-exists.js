const fs = require('fs')

function doesFileExist(filePath) {
    return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
            if (err) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}

module.exports = doesFileExist