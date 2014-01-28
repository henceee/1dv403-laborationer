"use strict"

var validator = {


    createptag: function () {

        var form = document.getElementById("personaldata");

        form.onsubmit = function () {

            return false;
        }

        var firstnamediv = document.getElementById("fn1");

        var fnp = document.createElement("p");

        fnp.id = "fnp";

        firstnamediv.appendChild(fnp);

        var lastnamediv = document.getElementById("ln");

        var lnp = document.createElement("p");

        lnp.id = "lnp";

        lastnamediv.appendChild(lnp);

        validator.firstname();

    },

    firstname: function () {


        //Hämtar ut input-fältet för förnamn

        var firstname = document.getElementById("firstname");


        //Kopplar en eventhandlare till inputfältet för förnamn.

        firstname.onblur = function (e) {

            //kollar om fältet för förnamn är tomt.

            if (firstname.value == "") {

                var fnp = document.getElementById("fnp");

                var firstnamediv = document.getElementById("fn1");

                //Sätter isf en röd border på fälten.

                firstname.setAttribute("class", "redborder");

                //Hämtar ut labels för för-/efternamn.

                var firstnamelabel = document.getElementsByClassName("firstname")[0];
                
                //Sätter färgen på labeln till röd.

                firstnamelabel.setAttribute("class", "red firstname");

                var fnp = document.getElementById("fnp");

                if (fnp.firstChild !== null) {
                    fnp.removeChild(fnp.firstChild);
                }
                
                var fntextnode = document.createTextNode("Fältet får inte lämnas tomt!");

                fntextnode.id = "fntext";

                fnp.appendChild(fntextnode);


            } else {
                //Sätter grön border på inputfältet om något skrivs in, samt grön färg på labeln.
                firstname.setAttribute("class", "greenborder");

                var firstnamelabel = document.getElementsByClassName("firstname")[0];

                firstnamelabel.setAttribute("class", "green firstname");
                
                //tar bort felmeddelandet

                var firstnamediv = document.getElementById("fn1");

                var fnp = document.getElementById("fnp");
                
                if (fnp.firstChild !== null) {
                    fnp.removeChild(fnp.firstChild);
                }
                

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

                lastname.setAttribute("class", "redborder");

                var lastnamelabel = document.getElementsByClassName("lastname")[0];

                //Sätter färgen på labeln till röd.

                lastnamelabel.setAttribute("class", "red lastname");

                //Hämtar ut diven som input & label för efternamn ligger i och skriver ut medd.

                var lnp = document.getElementById("lnp");

                if (lnp.firstChild !== null) {

                    lnp.removeChild(lnp.firstChild);
                }
                       
                var lntextnode = document.createTextNode("Fältet får inte lämnas tomt!");

                var lnp = document.getElementById("lnp");
                lnp.appendChild(lntextnode);
               
               

            } else {

                //Sätter grön border på inputfältet om något skrivs in, samt grön färg på labeln.

                lastname.setAttribute("class", "greenborder");
               
                var lastnamelabel = document.getElementsByClassName("lastname")[0];

                lastnamelabel.setAttribute("class", "green lastname");

                var lastnamediv = document.getElementById("ln");

                var lnp = document.getElementById("lnp");

                if (lnp.firstChild !== null) {

                    lnp.removeChild(lnp.firstChild);
                }

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

                ziplabel.setAttribute("class", "green zipcode");
                
                zipcode.setAttribute("class", "greenborder");                

            } else  {

                var ziplabel = document.getElementsByClassName("zipcode")[0];

                ziplabel.setAttribute("class", "red zipcode ");
                
                zipcode.setAttribute("class", "redborder");

                zip = "";
               
            }

            validator.email(firstname, lastname, zip);
        }
        
    },

    email: function (firstname, lastname, zipcode) {

        var email = document.getElementById("email");

        email.onblur = function () {

            var emailreg = /^(?!\.)(\w|-|\.){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$/;

            if (emailreg.test(email.value)) {

                email.setAttribute("class", "greenborder");
                

                var emaillabel = document.getElementsByClassName("email")[0];

                emaillabel.setAttribute("class", "email green");

                var mail = email.value;

            } else {
                   email.style.border = "1px solid red";

                    var emaillabel = document.getElementsByClassName("email")[0];

                    emaillabel.style.color = "red";

                    mail = "";
            }

            validator.pricemodel(firstname, lastname, zipcode, mail);
           
         }
      
    },

    pricemodel: function (firstname, lastname, zipcode, email) {

        var pricemodel = document.getElementById("pricemodel");

       
        pricemodel.onblur = function () {

            var pricemod = pricemodel.value;

            var send = document.getElementById("send");


            send.onclick = function (e) {

                validator.confirmation(firstname, lastname, zipcode, email, pricemod);
                return false;


            }

        }
    
    },

   

    confirmation: function (firstname,lastname, zipcode, email, pricemod) {


            var body = document.getElementsByTagName("body")[0];

            var inputs = document.getElementsByTagName("input");

            var select = document.getElementsByTagName("select")[0];

            //gör alla inputfält oklickbara

            for (var i = 0; i < inputs.length; i += 1) {

                inputs[i].setAttribute("disabled", "disabled");
            }
            
            select.setAttribute("disabled", "disabled");

            //sätter bakgrundsfärgen till grå

            var html = document.getElementsByTagName("html")[0];

            html.setAttribute("class", "unclickable");
            var payment = document.getElementById("payment");

            payment.setAttribute("class", "unclickable");
            
            //skapar div-tagen för popuprutan

            var popup = document.createElement("div");
            popup.id = "popup";
            
            //skapar en divtag i popuprutan för stängknapp och en h1a med texten "vänligen bekräfta ditt köp"

            var popupupper = document.createElement("div");

            popupupper.id = "popupupper";
            
            //skapar en stängknapp

            var closebutton = document.createElement("input");

            closebutton.setAttribute("type", "button");

            closebutton.setAttribute("value", "x");
            
            //sätter en onclick som bort popupfönstret och tar bort "disabled" på inputfälten, sätter tbx bakgrundsfärgen (i closepopup, rad 570).

            closebutton.onclick = function () {

                body.removeChild(popup);

                validator.closepopup(inputs, select);
            }

            popupupper.appendChild(closebutton);

            //Skapar headern
            
            var popupheader = document.createElement("h1");

            var headertext = document.createTextNode("Vänligen bekräfta ditt köp");

            popupheader.appendChild(headertext);

            popupupper.appendChild(popupheader);
              
            popup.appendChild(popupupper);

            //Skapar en divtag för infon som användaren knappat in

            var popupinfo = document.createElement("div");

            popupinfo.id = "popupinfo";
            
            //Skapar en tabell att stoppa in infon i

            var table = document.createElement("table");
            
            //Första raden för förnamn

            var tr1 = document.createElement("tr");

            var tdnamelabel = document.createElement("td");
            
            //hämtar ut labeln till inputfältet för förnamn, petar in texten i en p-tag och lägger in i en td.
            
            var namelabeltext = document.getElementsByClassName("firstname")[0].firstChild.textContent + ":";

            var namelabel = document.createTextNode(namelabeltext);

            var namelabelp = document.createElement("p");
            
            if (firstname == "") {

                namelabelp.setAttribute("class", "red");

            }

            namelabelp.appendChild(namelabel);

            tdnamelabel.appendChild(namelabelp);

            //petar in namnet som användaren angivit i en td

            var tdname = document.createElement("td");

            var fname = document.createTextNode(firstname);

            tdname.appendChild(fname);

            tr1.appendChild(tdnamelabel);
            tr1.appendChild(tdname);

            table.appendChild(tr1);

            //Andra raden, för  efternamn

            var tr2 = document.createElement("tr");

            var tdLnamelabel = document.createElement("td");
            
            //hämtar ut labeln till inputfältet för efternamn, petar in texten i en p-tag och lägger in i en td.

            var Lnamelabeltext = document.getElementsByClassName("lastname")[0].firstChild.textContent +":";

            var Lnamelabel = document.createTextNode(Lnamelabeltext);

            var Lnamelabelp = document.createElement("p");

            Lnamelabelp.appendChild(Lnamelabel);

            tdLnamelabel.appendChild(Lnamelabelp);

            tr2.appendChild(tdLnamelabel);

            //petar in efternamnet användaren har angett i en td

            var tdLname = document.createElement("td");

            if (lastname == "") {

                Lnamelabelp.setAttribute("class", "red");

            }

            var lname = document.createTextNode(lastname);

            tdLname.appendChild(lname);

            tr2.appendChild(tdLname);

            table.appendChild(tr2);

            //tredje raden, för postnr.

            var tr3 = document.createElement("tr");

            var tdziplabel = document.createElement("td");

            //hämtar ut labeln till inputfältet för postnr, petar in texten i en p-tag och lägger in i en td.

            var ziplabeltext = document.getElementsByClassName("zipcode")[0].firstChild.textContent+":";

            var ziplabel = document.createTextNode(ziplabeltext);

            var ziplabelp = document.createElement("p");

            ziplabelp.appendChild(ziplabel);

            tdziplabel.appendChild(ziplabelp);
            tr3.appendChild(tdziplabel);

            //petar in postnummret användaren har angett i en td

            var tdzip = document.createElement("td");
            
            if (zipcode == "") {

                ziplabelp.setAttribute("class", "red");

            }
            
            var zip = document.createTextNode(zipcode);

            tdzip.appendChild(zip);

            tr3.appendChild(tdzip);

            table.appendChild(tr3);
            
            //Fjärde raden, för email

            var tr4 = document.createElement("tr");

            var tdmaillabel = document.createElement("td");

            //hämtar ut labeln till inputfältet för postnr, petar in texten i en p-tag och lägger in i en td.

            var maillabeltext = document.getElementsByClassName("email")[0].firstChild.textContent + ":";
            
            var maillabel = document.createTextNode(maillabeltext);

            var maillabelp = document.createElement("p");

            maillabelp.appendChild(maillabel);

            tdmaillabel.appendChild(maillabelp);
            tr4.appendChild(tdmaillabel);
            
            //petar in postnummret användaren har angett i en td

            var tdmail = document.createElement("td");

            var mail = document.createTextNode(email);

            if (email == "") {

                maillabelp.setAttribute("class", "red");

            }

            tdmail.appendChild(mail);

            tr4.appendChild(tdmail);

            table.appendChild(tr4);
            
            //femte raden, för prismodell

            var tr5 = document.createElement("tr");

            var tdpricemodlabel = document.createElement("td");

            //hämtar ut labeln till inputfältet för postnr...

            var pricemodlabeltext = document.getElementsByClassName("pricemodel")[0].firstChild.textContent + ":";
            
            //tar bort "Välj"  med replace metoden så att det bara står "prismodell"

            pricemodlabeltext = pricemodlabeltext.replace("Välj", "");
            
            //... petar in texten i en p-tag och lägger in i en td.
            var pricemodlabel = document.createTextNode(pricemodlabeltext);

            var pricemodelp = document.createElement("p");

            pricemodelp.appendChild(pricemodlabel);

            tdpricemodlabel.appendChild(pricemodelp);

            tr5.appendChild(tdpricemodlabel);
            
            //petar in postnummret användaren har angett i en td

            var tdpricemod = document.createElement("td");

            var pricemodel = document.createTextNode(pricemod);

            tdpricemod.appendChild(pricemodel);

            tr5.appendChild(tdpricemod);

            //lägger in tabellen i diven "popupinfo" och stoppar in popupinfo i diven "popup", stoppar in "popup" i body.

            table.appendChild(tr5);
      
            popupinfo.appendChild(table);

            popup.appendChild(popupinfo);


            //skapar en avrbytknapp

            var cancelbutton = document.createElement("input");

            cancelbutton.setAttribute("type", "button");

            cancelbutton.setAttribute("value", "Avbryt");

            cancelbutton.id = "cancelbutton";
            
            //sätter en onclick på avbrytknappen

            cancelbutton.onclick = function () {

                //tar bort popupfönstret och tar bort "disabled" på inputfälten, sätter tbx bakgrundsfärgen (i closepopup, rad 570).

                body.removeChild(popup);

                validator.closepopup(inputs, select);

            }
            

            popup.appendChild(cancelbutton);

            //skapar en avbrytknapp

            var confirmbutton = document.createElement("input");

            confirmbutton.setAttribute("type", "button");

            confirmbutton.setAttribute("value", "Bekräfta ditt köp");

            confirmbutton.id = "confirmbutton";

            popup.appendChild(confirmbutton);

            //sätter en onclick som skickar formulärdatan

            confirmbutton.onclick = function () {
                
                var form = document.getElementById("personaldata");
                
                form.submit();

            }

            body.appendChild(popup);
                 
        
        },
        
    closepopup: function (inputs, select) {

        var unclickable = document.getElementsByClassName("unclickable");

        for (var j = 0; j < unclickable.length; j += 1) {

            unclickable[j].setAttribute("class", "normal");

            
        }

        for (var k = 0; k < inputs.length; k += 1) {

            inputs[k].removeAttribute("disabled");
        }

        select.removeAttribute("disabled");
        
        payment.setAttribute("class", "normal");

    },

   
       


};

window.onload = validator.createptag;