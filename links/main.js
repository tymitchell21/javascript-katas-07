let array = [1,2,3,4,5,6]

Array.prototype.newForEach = function (callback) {
    for (let i=0; i<this.length; i++) {
        callback(this[i], i, this)
    }
}

array.newForEach((x,i,array) => {
    console.log(x,i,array)
})

Array.prototype.newMap = function (callback) {
    let a = []
    for (let i=0; i<this.length; i++) {
        a.push(callback(this[i], i, this))
    }
    return a
}

const x = array.newMap(x => {
    return x+1
})
console.log(x)

Array.prototype.newSome = function (callback) {
    for (let i=0; i<this.length; i++) {
        if (callback(this[i], i, this)) return true
    }
    return false
}

function even (element) {
    return element % 2 === 0
}

console.log(array.newSome(even))

Array.prototype.newFind = function (callback) {
    for (let i=0; i<this.length; i++) {
        if (callback(this[i], i, this)) return this[i]
    }
    return undefined
}

console.log(array.newFind (x => {
    return x > 10;
}))

console.log(array.newFind (x => {
    return x > 1;
}))

console.log(array.newFind (x => {
    return x == 1;
}))

Array.prototype.newFindIndex = function (callback) {
    for (let i=0; i<this.length; i++) {
        if (callback(this[i], i, this)) return i
    }
    return -1
}

console.log(array.newFind (x => {
    return x > 4;
}))

console.log(array.newFind (x => {
    return x > 10;
}))

Array.prototype.newEvery = function (callback) {
    for (let i=0; i<this.length; i++) {
        if (!callback(this[i], i, this)) return false
    }
    return true
}

console.log(array.newEvery (currentValue => {
    return currentValue < 40;
}))

console.log(array.newEvery (currentValue => {
    return currentValue < 4;
}))

Array.prototype.newFilter = function (callback) {
    let a = []
    for (let i=0; i<this.length; i++) {
        if (callback(this[i], i, this)) a.push(this[i])
    }
    return a
}

console.log(array.newFilter (x => {
    return x < 4;
}))

console.log(array.newFilter (x => {
    return x > 1;
}))
  