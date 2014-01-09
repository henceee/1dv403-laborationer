"use strict"
var validator = {

    firstname: function () {

        //H�mtar ut input-f�ltet f�r f�rnamn

        var firstname = document.getElementById("firstname");

        

        //Kopplar en eventhandlare till inputf�ltet f�r f�rnamn.

        firstname.onblur = function (e) {

            //kollar om f�ltet f�r f�rnamn �r tomt.

            if (firstname.value == "") {

                //S�tter isf en r�d border p� f�lten.

                firstname.setAttribute("class", "redborder");

                //H�mtar ut labels f�r f�r-/efternamn.

                var firstnamelabel = document.getElementsByClassName("firstname")[0];
                
                //S�tter f�rgen p� labeln till r�d.

                firstnamelabel.setAttribute("class", "red firstname");

                //H�mtar ut diven som input & label f�r f�rnamn ligger i och skriver ut medd.

                var firstnamediv = document.getElementById("fn1");

                var fnp = document.createElement("p");

                var fntextnode = document.createTextNode("F�ltet f�r inte l�mnas tomt!");

                fnp.appendChild(fntextnode);

                firstnamediv.appendChild(fnp);

                


            } else {
                //S�tter gr�n border p� inputf�ltet om n�got skrivs in, samt gr�n f�rg p� labeln.
                firstname.setAttribute("class", "greenborder");

                var firstnamelabel = document.getElementsByClassName("firstname")[0];

                firstnamelabel.setAttribute("class", "green firstname");
                
                //tar bort felmeddelandet
                
                    firstnamediv.removeChild(fntextnode);
                
                


                var name = firstname.value;
                

            }

   
            validator.lastname(firstname.value);

        }

        

    },

    lastname: function (firstname) {

        //H�mtar ut input-f�ltet f�r efternamn

        var lastname = document.getElementById("lastname");

        //Kopplar en eventhanterare till inputf�ltet f�r efternamn.

        lastname.onblur = function () {

            //kollar om f�ltet f�r efternamn �r tomt.

            if (lastname.value == "") {

                //S�tter isf en r�d border p� f�lten.

                lastname.setAttribute("class", "redborder");


                var lastnamelabel = document.getElementsByClassName("lastname")[0];

                //S�tter f�rgen p� labeln till r�d.

                lastnamelabel.setAttribute("class", "red lastname");


                //H�mtar ut diven som input & label f�r efternamn ligger i och skriver ut medd.
               
                //var lnp = document.createElement("p");

                //var lastnamediv = document.getElementById("ln");

                
                //var lntextnode = document.createTextNode("F�ltet f�r inte l�mnas tomt!");

                //lnp.appendChild(lntextnode);
                //lastnamediv.appendChild(lnp);
                


            } else {
                //S�tter gr�n border p� inputf�ltet om n�got skrivs in, samt gr�n f�rg p� labeln.

                lastname.setAttribute("class", "greenborder");

               
                var lastnamelabel = document.getElementsByClassName("lastname")[0];

                lastnamelabel.setAttribute("class", "green lastname");

                var lastnamediv = document.getElementById("ln");

                //tar bort felmeddelandet
                
                lastnamediv.removeChild(lntextnode);
                
                //lastnamediv.innerHTML = "";

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

            var emailreg = /^(?!\.)(\w|-|\.){1,64}(?!\.)@(?!\.)[-.a-z���0-9]{4,253}$/;

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