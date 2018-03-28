const storage = require('./storage')


storage.put('first', 'first-value')
storage.put('second', true)
storage.put('third', 7106)
storage.put('fourth', 'go-go-go')

console.log(storage.data)

let tryGet = storage.get('third')
console.log(tryGet)

storage.update('third', 23)

let anotherGetValue = storage.get('third')
console.log(anotherGetValue)

storage.deleteItem('fourth')

console.log(storage.data)

storage.save()

storage.clear()

storage.load()

console.log(storage.get('first'))



