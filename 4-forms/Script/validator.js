
var validator = {

    init: function () {

        //Hämtar ut input-fälten för för- och efternamn

        var firstname = document.getElementById("firstname");
        var lastname = document.getElementById("lastname");

        //kollar om fälten för för-/efternamn är tomma.
        
        if (firstname.value == "" || lastname.value =="") {

            //Sätter isf en röd border på fälten.

            firstname.style.border = "1px solid red";
            lastname.style.border = "1px solid red";

            //Hämtar ut labels för för-/efternamn.

            var firstnamelabel = document.getElementsByClassName("firstname");
            var lastnamelabel = document.getElementsByClassName("lastname");

           //Sätter färgen på labeln till röd.

            firstnamelabel[0].style.color = "red";
            lastnamelabel[0].style.color = "red";

            //Hämtar ut diven som input & label för förnamn ligger i och skriver ut medd.

            var firstnamediv = document.getElementById("fn1");

            firstnamediv.innerHTML = "<p>Fältet får inte lämnas tomt!<p>";
            
            //Hämtar ut diven som input & label för efternamn ligger i och skriver ut medd.

            var lastnamediv = document.getElementById("ln");
            lastnamediv.innerHTML = "<p>Fältet får inte lämnas tomt!<p>";
            

        }

        //Kopplar en eventhandlare till inputfältet för förnamn.

        firstname.onkeyup = function (e) {

            //Sätter grön border på inputfältet om något skrivs in, samt grön färg på labeln.

            this.style.border = "1px solid green";
            var firstnamelabel = document.getElementsByClassName("firstname");

            firstnamelabel[0].style.color = "green";

            var firstnamediv = document.getElementById("fn1");

            firstnamediv.innerHTML = "";
            

            
        }

        //Kopplar en eventhanterare till inputfältet för efternamn.

        lastname.onkeyup = function () {
            
            //Sätter grön border på inputfältet om något skrivs in, samt grön färg på labeln.

            this.style.border = "1px solid green";
            var lastnamelabel = document.getElementsByClassName("lastname");

            lastnamelabel[0].style.color = "green";

            var lastnamediv = document.getElementById("ln");

            lastnamediv.innerHTML = "";

            
        }

        //Hämtar ut inputfältet för postnummer

        var zipcode = document.getElementById("zipcode");
        
        //var reg = new RegExp(/^[0-9]{5}$/);

        if (zipcode.value !== reg) {

            //..
        }
       
        if (zipcode.value == reg) {

            //...

        }

        

        
    }

}

window.onload = validator.init;