
var validator = {

    firstname: function () {

        //H�mtar ut input-f�ltet f�r f�rnamn

        var firstname = document.getElementById("firstname");
        

        //Kopplar en eventhandlare till inputf�ltet f�r f�rnamn.

        firstname.onblur = function (e) {

            //kollar om f�ltet f�r f�rnamn �r tomt.

            if (firstname.value == "") {

                //S�tter isf en r�d border p� f�lten.

                firstname.style.border = "1px solid red";


                //H�mtar ut labels f�r f�r-/efternamn.

                var firstnamelabel = document.getElementsByClassName("firstname");


                //S�tter f�rgen p� labeln till r�d.

                firstnamelabel[0].style.color = "red";


                //H�mtar ut diven som input & label f�r f�rnamn ligger i och skriver ut medd.

                var firstnamediv = document.getElementById("fn1");

                firstnamediv.innerHTML = "<p>F�ltet f�r inte l�mnas tomt!<p>";



            } else {
                //S�tter gr�n border p� inputf�ltet om n�got skrivs in, samt gr�n f�rg p� labeln.
                this.style.border = "1px solid green";
                var firstnamelabel = document.getElementsByClassName("firstname");

                firstnamelabel[0].style.color = "green";

                var firstnamediv = document.getElementById("fn1");

                //tar bort felmeddelandet

                firstnamediv.innerHTML = "";

            }

   
            validator.lastname();

        }

        

    },

    lastname: function () {

        //H�mtar ut input-f�ltet f�r efternamn

        var lastname = document.getElementById("lastname");

        //Kopplar en eventhanterare till inputf�ltet f�r efternamn.

        lastname.onblur = function () {

            //kollar om f�ltet f�r efternamn �r tomt.

            if (lastname.value == "") {

                //S�tter isf en r�d border p� f�lten.


                lastname.style.border = "1px solid red";

                //H�mtar ut labels f�r efternamn.

                var lastnamelabel = document.getElementsByClassName("lastname");

                //S�tter f�rgen p� labeln till r�d.

                lastnamelabel[0].style.color = "red";


                //H�mtar ut diven som input & label f�r efternamn ligger i och skriver ut medd.

                var lastnamediv = document.getElementById("ln");
                lastnamediv.innerHTML = "<p>F�ltet f�r inte l�mnas tomt!<p>";


            } else {
                //S�tter gr�n border p� inputf�ltet om n�got skrivs in, samt gr�n f�rg p� labeln.

                this.style.border = "1px solid green";
                var lastnamelabel = document.getElementsByClassName("lastname");

                lastnamelabel[0].style.color = "green";

                var lastnamediv = document.getElementById("ln");

                //tar bort felmeddelandet
                [0]
                lastnamediv.innerHTML = "";

            }

        }

        
        validator.zipcode();
    },

    zipcode: function () {

        var zipcode = document.getElementById("zipcode");


        zipcode.onblur = function () {

            //var regall =/^\w{2}?\s?[0-9]{3}?\s?[-]?[0-9]{2}||[0-9]{5}$/

            //J�VLA REGEX SV�LJER JU VAD FAN SOM HELST -.-

            //console.log(zipcode.value);

            //console.log(regall.test(zipcode.value));

            //if (regall.test(zipcode.value)) {
                
            //    var zipstr = zipcode.value;

            //    //zipcode.value = zipstr.replace(/^\s?[-]?$/, "");

            //    console.log("mellanslag och hyphen: " + /^\s*?$\gi/.test(zipstr));
            //}
            
            console.log(zipcode.value);
            if (zipcode.value == "") {

                var ziplabel = document.getElementsByClassName("zipcode")[0];

                console.log(ziplabel);

                ziplabel.style.color = "red";

                zipcode.style.border = "1px solid red";
            }
        }
    },
};

window.onload = validator.firstname;