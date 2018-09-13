const fs = require('fs')
const path = require('path')

function saveData(fileName, data) {
    return new Promise((resolve, reject) => {
        let filePath = path.join(__rootdir, 'data', fileName)

        fs.writeFile(filePath, data, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve('success')
            }
        })
    })
}

function getData(fileName) {
    return new Promise((resolve, reject) => {
        let filePath = path.join(__rootdir, 'data', fileName)

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    getData,
    saveData
}