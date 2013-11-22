"use strict";



// inkopierat som referenspunkt

/*
function Player(name, age, handedness){
	var score = 0;
	
	this.getName = function(){return name;};
	this.setName = function(_name){name = _name;};
	
	this.getAge = function(){return age;};
	this.setAge = function(_age){age = _age;};
	
	this.getHandedness = function(){return name;};
	this.setHandedness = function(_handedness){handedness = _handedness;};
	
	this.getScore = function(){return score;};
	
	this.addPoint = function(point){
			if((!isNaN(point)) && (point > 0)){
				score += point;
			}
	};	
}
*/

var makePerson = function (persArr) {

    var minAge = 36;
    var maxAge = 46;
    
    this.getName = function() {return name;};
    this.setName = function (_name) { name = _name; };
        
    this.getMinAge = function () { return minAge; };
    this.getMaxAge = function () { return maxAge; };
    
    this.getAge = function () { return age; };
    this.setAge = function (_age) {age = _age;};
        
    

    var result = {};

  
    
}

var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];


var result = makePerson(data);


console.log(result);


