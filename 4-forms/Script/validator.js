"use strict"



var validator = {
      

    validate: function () {
        
        var send = document.getElementById("send");

        send.setAttribute("disabled", "disabled");

        var form = document.getElementById("personaldata");
        
        //Sätter return false på submit-knappen

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


        //Hämtar ut input-fältet för förnamn

        var firstname = document.getElementById("firstname");


        //Kopplar en eventhandlare till inputfältet för förnamn.

        firstname.onblur = function () {

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

                    fname = "";
                    fnamevalid = false;


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

                        fname = firstname.value;
                        fnamevalid = true;                        
                        
                }
                console.log(fnamevalid);
                
                validator.isvalid(send);
               

        }

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

                        lname = "";
                        lnamevalid = false;


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

                        lname = lastname.value;
                        lnamevalid = true;
                    }
                    console.log(lnamevalid);
            }

            //hämtar ut och sätter en onblur för inputen för postnr

            var zipcode = document.getElementById("zipcode");

            zipcode.onblur = function () {

                var regall = /^(\w{2}\s?)?\d{3}(\s|[-])?\d{2}$/;

                //om postnr matchar formen 12345, 123 45, 123-45, SE123 45, SE123-45, SE 123 45, SE 123 45, SE 123-45 ....

                    if (regall.test(zipcode.value)) {

                        //...trimma bort bokstäver, mellanslag och bindenstreck.

                        zipcode.value = zipcode.value.replace(/se|-|\s/gi, "");

                        var ziplabel = document.getElementsByClassName("zipcode")[0];

                        ziplabel.setAttribute("class", "green zipcode");

                        zipcode.setAttribute("class", "greenborder");

                        zip = zipcode.value;
                        zipvalid = true;


                    } else {

                        //annars sätt en röd border och färg via css klass.

                        var ziplabel = document.getElementsByClassName("zipcode")[0];

                        ziplabel.setAttribute("class", "red zipcode ");

                        zipcode.setAttribute("class", "redborder");

                        zip = "";
                        zipvalid = false;

                    }                
                    console.log(zipvalid);
                    validator.isvalid(send);
            }



            //hämtar ut och sätter en onblur för inputen för mail

            var email = document.getElementById("email");

            email.onblur = function () {
                var emailreg = /^(?!\.)(\w|-|\.){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}$/;

                //Kollar så mailen matchar korrekt form.

                    if (emailreg.test(email.value)) {

                        email.setAttribute("class", "greenborder");


                        var emaillabel = document.getElementsByClassName("email")[0];

                        emaillabel.setAttribute("class", "email green");

                        mail = email.value;
                        mailvalid = true;


                    } else {

                        email.setAttribute("class", "redborder");

                        var emaillabel = document.getElementsByClassName("email")[0];

                        emaillabel.setAttribute("class", "email red");


                        mail = "";
                        mailvalid = false;
                    }
                    console.log(mailvalid);
                    validator.isvalid(send);
            }
        

            var pricemodelinput = document.getElementById("pricemodel");

            pricemodelinput.onblur = function () {

                pricemod = pricemodelinput.value;

            }
        //console.log(fnamevalid);

            
       
            
           send.onclick = function (e) {
            
               

            //return false;

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

                    if (fname == "") {

                        namelabelp.setAttribute("class", "red");

                    }

                namelabelp.appendChild(namelabel);

                tdnamelabel.appendChild(namelabelp);


               //petar in namnet som användaren angivit i en td

                var tdname = document.createElement("td");

                var fstname = document.createTextNode(fname);

                tdname.appendChild(fstname);

                tr1.appendChild(tdnamelabel);
                tr1.appendChild(tdname);

                table.appendChild(tr1);


               //Andra raden, för  efternamn

                var tr2 = document.createElement("tr");

                var tdLnamelabel = document.createElement("td");

               //hämtar ut labeln till inputfältet för efternamn, petar in texten i en p-tag och lägger in i en td.

                var Lnamelabeltext = document.getElementsByClassName("lastname")[0].firstChild.textContent + ":";

                var Lnamelabel = document.createTextNode(Lnamelabeltext);

                var Lnamelabelp = document.createElement("p");

                Lnamelabelp.appendChild(Lnamelabel);

                tdLnamelabel.appendChild(Lnamelabelp);

                tr2.appendChild(tdLnamelabel);

               //petar in efternamnet användaren har angett i en td

                var tdLname = document.createElement("td");

                    if (lname == "") {

                        Lnamelabelp.setAttribute("class", "red");

                    }
                
                var lstname = document.createTextNode(lname);

                tdLname.appendChild(lstname);

                tr2.appendChild(tdLname);

                table.appendChild(tr2);

               //tredje raden, för postnr.

                var tr3 = document.createElement("tr");

                var tdziplabel = document.createElement("td");

               //hämtar ut labeln till inputfältet för postnr, petar in texten i en p-tag och lägger in i en td.

                var ziplabeltext = document.getElementsByClassName("zipcode")[0].firstChild.textContent + ":";

                var ziplabel = document.createTextNode(ziplabeltext);

                var ziplabelp = document.createElement("p");

                ziplabelp.appendChild(ziplabel);

                tdziplabel.appendChild(ziplabelp);
                tr3.appendChild(tdziplabel);

               //petar in postnummret användaren har angett i en td

                var tdzip = document.createElement("td");

                    if (zip == "") {

                        ziplabelp.setAttribute("class", "red");

                    }

                var zipc = document.createTextNode(zip);

                tdzip.appendChild(zipc);

                tr3.appendChild(tdzip);

                table.appendChild(tr3);


               //Fjärde raden, för email

                var tr4 = document.createElement("tr");

                var tdmaillabel = document.createElement("td");

               //hämtar ut labeln till inputfältet för mail, petar in texten i en p-tag och lägger in i en td.

                var maillabeltext = document.getElementsByClassName("email")[0].firstChild.textContent + ":";

                var maillabel = document.createTextNode(maillabeltext);

                var maillabelp = document.createElement("p");

                maillabelp.appendChild(maillabel);

                tdmaillabel.appendChild(maillabelp);
                tr4.appendChild(tdmaillabel);


               //petar in emailen användaren har angett i en td

                var tdmail = document.createElement("td");

                var mailz = document.createTextNode(mail);

                    if (mail == "") {

                        maillabelp.setAttribute("class", "red");

                    }

                tdmail.appendChild(mailz);

                tr4.appendChild(tdmail);

                table.appendChild(tr4);


               //femte raden, för prismodell

                var tr5 = document.createElement("tr");

                var tdpricemodlabel = document.createElement("td");

               //hämtar ut labeln till inputfältet för prismodell...

                var pricemodlabeltext = document.getElementsByClassName("pricemodel")[0].firstChild.textContent + ":";

               //tar bort "Välj"  med replace metoden så att det bara står "prismodell"

                pricemodlabeltext = pricemodlabeltext.replace("Välj", "");

               //... petar in texten i en p-tag och lägger in i en td.
                var pricemodlabel = document.createTextNode(pricemodlabeltext);

                var pricemodelp = document.createElement("p");

                pricemodelp.appendChild(pricemodlabel);

                tdpricemodlabel.appendChild(pricemodelp);

                tr5.appendChild(tdpricemodlabel);

               //petar in prismodellen användaren har angett i en td

                var tdpricemod = document.createElement("td");

                var pricemodeltext = document.createTextNode(pricemod);

                tdpricemod.appendChild(pricemodeltext);

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

    isvalid: function (send) {
       

        if (fnamevalid && lnamevalid && zipvalid && mailvalid) {

            send.removeAttribute("disabled");
           

        }

        return;
    }

   
 


};

var fname,lname,zip,mail,pricemod;

var fnamevalid,lnamevalid,zipvalid,mailvalid;

window.onload = validator.validate;