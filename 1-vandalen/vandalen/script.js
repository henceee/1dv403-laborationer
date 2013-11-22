"use strict";


var makePerson = function (persArr) {

    this.setName = function () { return name };
    this.getName = function (_name) { name = _name };
    this.setAge = function () { return age };
    this.getAge = function (_age) { age = _age };
    

    var result = {};

    this.setName(name);
    this.setAge(age);

    return result;
    

    
}

var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];


var result = makePerson(data);


console.log(result);