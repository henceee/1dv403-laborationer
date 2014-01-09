"use strict"
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

                var name = firstname.value;
                

            }

   
            validator.lastname(firstname.value);

        }

        

    },

    lastname: function (firstname) {

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

                var lname = lastname.value;

               

            }

            validator.zipcode(firstname, lastname.value);
        }

        
    },

    zipcode: function (firstname, lastname) {

        var zipcode = document.getElementById("zipcode");


        zipcode.onblur = function () {

            var regall = /^(\w{2}\s?)?\d{3}(\s|[-])?\d{2}$/;
                
            if (regall.test(zipcode.value)) {

                var zip = zipcode.value.replace(/se|-|\s/gi, "");
                
                var ziplabel = document.getElementsByClassName("zipcode")[0];

                ziplabel.style.color = "green";

                zipcode.style.border = "1px solid green";

                

            } else  {

                var ziplabel = document.getElementsByClassName("zipcode")[0];

                ziplabel.style.color = "red";

                zipcode.style.border = "1px solid red";
            }

            validator.email(firstname, lastname, zipcode.value);
        }
        
    },

    email: function (firstname, lastname, zipcode) {

        var email = document.getElementById("email");

        email.onblur = function () {

            var emailreg = /^(?!\.)(\w|-|\.){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$/;

            if (emailreg.test(email.value)) {

                email.style.border = "1px solid green";

                var emaillabel = document.getElementsByClassName("email")[0];

                emaillabel.style.color = "green";

                var mail = email.value;

                

            } else {
                   email.style.border = "1px solid red";

                    var emaillabel = document.getElementsByClassName("email")[0];

                    emaillabel.style.color = "red";
            }

            validator.pricemodel(firstname, lastname, zipcode, email.value);
            //validator.confirmation(firstname, lastname, zipcode, email.value);
         }
        
        
    },

    pricemodel: function (firstname, lastname, zipcode, email) {

        var pricemodel = document.getElementById("pricemodel");

        console.log(pricemodel);
        pricemodel.onblur = function () {

            var pricemod = pricemodel.value;

            validator.confirmation(firstname, lastname, zipcode, email, pricemod);

        }
    
    },

   

    confirmation: function (firstname,lastname, zipcode, email) {

        console.log(firstname);
        console.log(lastname);
        console.log(zipcode);
        console.log(email);

        var send = document.getElementById("send");

        send.onclick = function () {

            var body = document.getElementsByTagName("body")[0];

            var popup = document.createElement("div");

            popup.id = popup;

        }

        //console.log(send);

        //var body = document.getElementsByTagName("body")[0];

        

    }

        

    


};

window.onload = validator.firstname;