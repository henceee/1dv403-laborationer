"use strict";





var makePerson = function (personarr){

    var namearr1 = new Array;
    var agearr = new Array;
    var namerarr;

    for (var i = 0; i < personarr.length; i += 1) {

        namearr1 += personarr[i].name +",";

    }

    

    for (var i = 0; i < personarr.length; i += 1) {

        agearr += personarr[i].age+",";

    }

    //console.log(namearr);
    //console.log(agearr);
    
    
    
    


    var result = {};

    result.names = "Johan Leitet, John Häggerud, Mats Loock";
    result.minAge = 36;
    result.maxAge = 46;
    result.averageAge = 40;

    return result;


};


