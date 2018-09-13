const {getData, saveData} = require('./io')

let user = 'p184560'

function addItem(item) {
    return new Promise((resolve, reject) => {
        getData(user).then((res) => {
            let json = JSON.parse(res)
    
            json.push(item)
    
            saveData(user, JSON.stringify(json)).then((res) => {
                console.log("saved")
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        }).catch((err) => {
            reject(err)
        })
    })
}

function updateItem(id, newItemUpdates) {
    return new Promise((resolve, reject) => {
        getData(user).then((res) => {
            let json = JSON.parse(res)

            let newArray = json.map((item) => {
                if (item.id === id) {
                    return Object.assign({}, item, newItemUpdates)
                } else {
                    return item
                }
            })

            saveData(user, JSON.stringify(newArray)).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

function dismissItem(id) {
    return new Promise((resolve, reject) => {
        let itemUpdates = {dismissed: true}

        updateItem(id, itemUpdates).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

module.exports = {
    addItem,
    updateItem,
    dismissItem
}