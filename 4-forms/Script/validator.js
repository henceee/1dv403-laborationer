
var validator = {

    init: function () {

        //H�mtar ut input-f�lten f�r f�r- och efternamn

        var firstname = document.getElementById("firstname");
        var lastname = document.getElementById("lastname");

        //kollar om f�lten f�r f�r-/efternamn �r tomma.
        
        if (firstname.value == "" || lastname.value =="") {

            //S�tter isf en r�d border p� f�lten.

            firstname.style.border = "1px solid red";
            lastname.style.border = "1px solid red";

            //H�mtar ut labels f�r f�r-/efternamn.

            var firstnamelabel = document.getElementsByClassName("firstname");
            var lastnamelabel = document.getElementsByClassName("lastname");

           //S�tter f�rgen p� labeln till r�d.

            firstnamelabel[0].style.color = "red";
            lastnamelabel[0].style.color = "red";

            //H�mtar ut diven som input & label f�r f�rnamn ligger i och skriver ut medd.

            var firstnamediv = document.getElementById("fn1");

            firstnamediv.innerHTML = "<p>F�ltet f�r inte l�mnas tomt!<p>";
            
            //H�mtar ut diven som input & label f�r efternamn ligger i och skriver ut medd.

            var lastnamediv = document.getElementById("ln");
            lastnamediv.innerHTML = "<p>F�ltet f�r inte l�mnas tomt!<p>";
            

        }

        //Kopplar en eventhandlare till inputf�ltet f�r f�rnamn.

        firstname.onkeyup = function (e) {

            //S�tter gr�n border p� inputf�ltet om n�got skrivs in, samt gr�n f�rg p� labeln.

            this.style.border = "1px solid green";
            var firstnamelabel = document.getElementsByClassName("firstname");

            firstnamelabel[0].style.color = "green";

            var firstnamediv = document.getElementById("fn1");

            firstnamediv.innerHTML = "";
            

            
        }

        //Kopplar en eventhanterare till inputf�ltet f�r efternamn.

        lastname.onkeyup = function () {
            
            //S�tter gr�n border p� inputf�ltet om n�got skrivs in, samt gr�n f�rg p� labeln.

            this.style.border = "1px solid green";
            var lastnamelabel = document.getElementsByClassName("lastname");

            lastnamelabel[0].style.color = "green";

            var lastnamediv = document.getElementById("ln");

            lastnamediv.innerHTML = "";

            
        }

        //H�mtar ut inputf�ltet f�r postnummer

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