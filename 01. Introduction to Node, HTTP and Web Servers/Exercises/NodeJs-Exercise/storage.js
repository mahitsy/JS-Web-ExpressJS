const fs = require('fs')

let data = {}

let dataFile = 'storage.dat'

let validateKeyAsString = (key) => {
    if (typeof key !== 'string') {
        throw new Error('Key must be a sting')
    }
}

let alreadyExists = (key) => {
    if (data.hasOwnProperty(key)) {
        throw new Error('Key already exist')
    }
}

let doesntExists = (key) => {
    if (!data.hasOwnProperty(key)) {
        throw new Error('Key could not be found')
    }
}

let put = (key, value) => {
    validateKeyAsString(key)

    alreadyExists(key)

    data[key] = value

}

let get = (key) => {
    validateKeyAsString(key)

    doesntExists(key)

    return data[key]
}

let update = (key, value) => {
    validateKeyAsString(key)

    doesntExists(key)

    data[key] = value

}

let deleteItem = (key) => {
    validateKeyAsString(key)

    doesntExists(key)

    delete data[key]
}

let clear = () => {
    data = {}
}

let save = () => {

    let dataAsString = JSON.stringify(data)
    fs.writeFileSync(dataFile, dataAsString)

}

let load = () => {
    let dataAsString = fs.readFileSync(dataFile)

    data = JSON.parse(dataAsString)

}

module.exports = {
    put: put,
    get: get,
    update: update,
    deleteItem: deleteItem,
    clear: clear,
    save: save,
    load: load,
    data: data
}