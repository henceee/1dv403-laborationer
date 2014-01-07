
var validator = {

    firstname: function () {

        //Hämtar ut input-fältet för förnamn

        var firstname = document.getElementById("firstname");
        

        //Kopplar en eventhandlare till inputfältet för förnamn.

        firstname.onblur = function (e) {

            //kollar om fältet för förnamn är tomt.

            if (firstname.value == "") {

                //Sätter isf en röd border på fälten.

                firstname.style.border = "1px solid red";


                //Hämtar ut labels för för-/efternamn.

                var firstnamelabel = document.getElementsByClassName("firstname");


                //Sätter färgen på labeln till röd.

                firstnamelabel[0].style.color = "red";


                //Hämtar ut diven som input & label för förnamn ligger i och skriver ut medd.

                var firstnamediv = document.getElementById("fn1");

                firstnamediv.innerHTML = "<p>Fältet får inte lämnas tomt!<p>";



            } else {
                //Sätter grön border på inputfältet om något skrivs in, samt grön färg på labeln.
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

        //Hämtar ut input-fältet för efternamn

        var lastname = document.getElementById("lastname");

        //Kopplar en eventhanterare till inputfältet för efternamn.

        lastname.onblur = function () {

            //kollar om fältet för efternamn är tomt.

            if (lastname.value == "") {

                //Sätter isf en röd border på fälten.


                lastname.style.border = "1px solid red";

                //Hämtar ut labels för efternamn.

                var lastnamelabel = document.getElementsByClassName("lastname");

                //Sätter färgen på labeln till röd.

                lastnamelabel[0].style.color = "red";


                //Hämtar ut diven som input & label för efternamn ligger i och skriver ut medd.

                var lastnamediv = document.getElementById("ln");
                lastnamediv.innerHTML = "<p>Fältet får inte lämnas tomt!<p>";


            } else {
                //Sätter grön border på inputfältet om något skrivs in, samt grön färg på labeln.

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

            //JÄVLA REGEX SVÄLJER JU VAD FAN SOM HELST -.-

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