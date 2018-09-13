const fs = require('fs')
const path = require('path')

const doesFileExist = require('./lib/file-exists')

const defaultData = require('../data/notification-default')

let currentDefault = defaultData

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

        doesFileExist(filePath).then(exists => {
            if (exists) {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.log(err)
                        reject(err)
                    } else {
                        resolve(data)
                    }
                })
            } else {
                let defaultDataString = JSON.stringify(currentDefault)
                saveData(fileName, defaultDataString).then(res => {
                    console.log(defaultDataString)
                    resolve(defaultDataString)
                }).catch((err) => {
                    console.error(err)
                })
            }
        }).catch(err => {
            console.error(err)
            reject(err)
        })
    })
}

function setCurrentDefault(jsonObj) {
    currentDefault = jsonObj
}

function getCurrentDefault() {
    return JSON.parse(JSON.stringify(currentDefault))
}

function resetDefault() {
    currentDefault = defaultData
}

module.exports = {
    getData,
    saveData,
    setCurrentDefault,
    getCurrentDefault,
    resetDefault
}