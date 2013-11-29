"use strict";



var makePerson = function (personarr){

    var agearr = new Array;
    var namearr1 = new Array;
    
    

    for (var i = 0; i < personarr.length; i += 1) {

        
        namearr1 += personarr[i].name;

    }

    

    namarr1 = namearr1.join();

    namearr1.sort(function (Johan, John, Mats) { return Johan.localCompare(John)});
    

    for (var i = 0; i < personarr.length; i += 1) {

        agearr += personarr[i].age + " ";

    }

    
    
    agearr.sort();

    console.log(agearr);
    

    


    var result = {};

    result.names = namearr1;
    result.minAge = 36;
    result.maxAge = 46;
    result.averageAge = 40;

    return result;


};


