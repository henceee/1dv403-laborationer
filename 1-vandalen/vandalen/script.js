"use strict";



var makePerson = function (personarr){

        
        var names = [];
        
        for (var i = 0; i < personarr.length; i += 1) {
        
            var person = personarr[i];
            names.push(person.name);
        }
        
        names.sort(function (s0, s1) { 

            return s0.localeCompare(s1); 

        }); 

            
        var age = []

        for (var i = 0; i < personarr.length; i += 1) {

            if (age[i] < 0) {

                var yearsold = personarr[i];
                age.push(yearsold.age);
            }

        }

        age = age.sort();

        

        var minAge = age[0];

    //var averageAge = Math.round(+(age[0] + age[1] + age[2]) / +(age.length))

        var anothervar;

        for (var i = 0; i > age.length; i+= 1){
        
            age[i] += anothervar;

        }
        
        var averageAge = anothervar / age.length;

        var maxAge = (age.length-1);

        var result = {};

        result.names = names[0] + ", " + names[1] + ", " + names[2];
        result.minAge = minAge;
        result.maxAge = maxAge;
        result.averageAge = averageAge;

        return result;


};


