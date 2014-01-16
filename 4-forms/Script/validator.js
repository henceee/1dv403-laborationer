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
           
         }
      
    },

    pricemodel: function (firstname, lastname, zipcode, email) {

        var pricemodel = document.getElementById("pricemodel");

       
        pricemodel.onblur = function () {

            var pricemod = pricemodel.value;

            var send = document.getElementById("send");

            send.onclick = function (e) {

                validator.confirmation(firstname, lastname, zipcode, email, pricemod);
            }

        }
    
    },

   

    confirmation: function (firstname,lastname, zipcode, email, pricemod) {


            var body = document.getElementsByTagName("body")[0];

            var inputs = document.getElementsByTagName("input");

            var select = document.getElementsByTagName("select")[0];


            for (var i = 0; i < inputs.length; i += 1) {

                inputs[i].setAttribute("disabled", "disabled");
            }
            
            select.setAttribute("disabled", "disabled");

            var html = document.getElementsByTagName("html")[0];

            html.setAttribute("class", "unclickable");
            var payment = document.getElementById("payment");

            payment.setAttribute("class", "unclickable");

            var popup = document.createElement("div");
            popup.id = "popup";

            var popupupper = document.createElement("div");

            popupupper.id = "popupupper";

            var closebutton = document.createElement("input");

            closebutton.setAttribute("type", "button");

            closebutton.setAttribute("value", "x");

            closebutton.onclick = function () {

                body.removeChild(popup);

                validator.closepopup(inputs, select);
            }

            popupupper.appendChild(closebutton);
            
            var popupheader = document.createElement("h1");

            var headertext = document.createTextNode("Vänligen bekräfta ditt köp");

            popupheader.appendChild(headertext);

            popupupper.appendChild(popupheader);
                   

            popup.appendChild(popupupper);

            var popupinfo = document.createElement("div");

            popupinfo.id = "popupinfo";

            var table = document.createElement("table");

            var tr1 = document.createElement("tr");

            var tdnamelabel = document.createElement("td");
            
            var namelabeltext = document.getElementsByClassName("firstname")[0].firstChild.textContent +":";

            var namelabel = document.createTextNode(namelabeltext);

            var namelabelp = document.createElement("p");

            namelabelp.appendChild(namelabel);

            tdnamelabel.appendChild(namelabelp);

            var tdname = document.createElement("td");

            var fname = document.createTextNode(firstname);

            tdname.appendChild(fname);

            tr1.appendChild(tdnamelabel);
            tr1.appendChild(tdname);

            table.appendChild(tr1);

            var tr2 = document.createElement("tr");

            var tdLnamelabel = document.createElement("td");

            var Lnamelabeltext = document.getElementsByClassName("lastname")[0].firstChild.textContent +":";

            var Lnamelabel = document.createTextNode(Lnamelabeltext);

            var Lnamelabelp = document.createElement("p");

            Lnamelabelp.appendChild(Lnamelabel);

            tdLnamelabel.appendChild(Lnamelabelp);

            tr2.appendChild(tdLnamelabel);

            var tdLname = document.createElement("td");

            var lname = document.createTextNode(lastname);

            tdLname.appendChild(lname);

            tr2.appendChild(tdLname);

            table.appendChild(tr2);

            var tr3 = document.createElement("tr");

            var tdziplabel = document.createElement("td");

            var ziplabeltext = document.getElementsByClassName("zipcode")[0].firstChild.textContent+":";

            var ziplabel = document.createTextNode(ziplabeltext);

            var ziplabelp = document.createElement("p");

            ziplabelp.appendChild(ziplabel);

            tdziplabel.appendChild(ziplabelp);
            tr3.appendChild(tdziplabel);

            var tdzip = document.createElement("td");
            
            var zip = document.createTextNode(zipcode);

            tdzip.appendChild(zip);

            tr3.appendChild(tdzip);

            table.appendChild(tr3);
            
            popupinfo.appendChild(table);
            
            popup.appendChild(popupinfo);
            
            body.appendChild(popup);

            var tr4 = document.createElement("tr");

            var tdmaillabel = document.createElement("td");

            var maillabeltext = document.getElementsByClassName("email")[0].firstChild.textContent + ":";
            
            var maillabel = document.createTextNode(maillabeltext);

            var maillabelp = document.createElement("p");

            maillabelp.appendChild(maillabel);

            tdmaillabel.appendChild(maillabelp);
            tr4.appendChild(tdmaillabel);

            var tdmail = document.createElement("td");

            var mail = document.createTextNode(email);

            tdmail.appendChild(mail);

            tr4.appendChild(tdmail);

            table.appendChild(tr4);

            var tr5 = document.createElement("tr");

            var tdpricemodlabel = document.createElement("td");

            var pricemodlabeltext = document.getElementsByClassName("pricemodel")[0].firstChild.textContent + ":";

            pricemodlabeltext = pricemodlabeltext.replace("Välj", "");

            var pricemodlabel = document.createTextNode(pricemodlabeltext);

            var pricemodelp = document.createElement("p");

            pricemodelp.appendChild(pricemodlabel);

            tdpricemodlabel.appendChild(pricemodelp);

            tr5.appendChild(tdpricemodlabel);

            var tdpricemod = document.createElement("td");

            var pricemodel = document.createTextNode(pricemod);

            tdpricemod.appendChild(pricemodel);

            tr5.appendChild(tdpricemod);

            table.appendChild(tr5);
            
            var cancelbutton = document.createElement("input");

            cancelbutton.setAttribute("type", "button");

            cancelbutton.setAttribute("value", "Avbryt");

            cancelbutton.id = "cancelbutton";

            cancelbutton.onclick = function () {

                body.removeChild(popup);

                validator.closepopup(inputs, select);

            }

            popup.appendChild(cancelbutton);

            var confirmbutton = document.createElement("input");

            confirmbutton.setAttribute("type", "button");

            confirmbutton.setAttribute("value", "Bekräfta ditt köp");

            confirmbutton.id = "confirmbutton";

            popup.appendChild(confirmbutton);

            confirmbutton.onclick = function () {

                var form = document.getElementById("personaldata");

                form.submit();
                

            }
                 
        
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