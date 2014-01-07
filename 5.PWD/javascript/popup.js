"use strict"


var popup = {
    
    

    onclick: function() {
            
        //hämtar ut "toolbar"-diven 

        var toolbar = document.getElementById("toolbar");

        //Hämtar ut bilden via img tagen

        var img = toolbar.getElementsByTagName("IMG")[0];

        //Onclick till bilden på desktopens "toolbar" (längst ner). Gör en prevent default, anropar popupwin funktionen.

        img.onclick = function (e) {

            e.preventDefault();

            popup.popupwin();

        }
        
    },

    popupwin: function () {

        //hämtar ut body-tagen
        var body = document.getElementsByTagName("body")[0];

        //skapar popupfönstret
        var popupdiv = document.createElement("DIV");

        popupdiv.id = "popupdiv";
        
        //skapar fönstrets info-rad, där en bild, titeln på fönstret och en stängknapp ska ligga.

        var wintop = document.createElement("DIV");
        wintop.id = "popuptop";

        //skapar en div där en bild ska till popupfönstrets inforad (längst upp). Lägger in den i infobarens div-tag.

        var winpicdiv = document.createElement("DIV");
        winpicdiv.id = "popuppicdiv";

        var winpic = document.createElement("IMG");

        winpic.setAttribute("src", "pics/PenguinsSmall.jpg");
        
        winpic.id = "popuppic";

        winpicdiv.appendChild(winpic);

        wintop.appendChild(winpicdiv);

       
        //skapar en div där en titeln ska läggas in.

        var wintextdiv = document.createElement("DIV");

        //skapar en p-tag med texten "ImageViewer" och lägger in den info-radens div.

        var winptag = document.createElement("P");

        winptag.id="popuptextdiv"

        winptag.innerHTML = "Image Viewer";

        wintextdiv.appendChild(winptag);

        wintop.appendChild(wintextdiv);

        //skapar en stäng-knapp och lägger in den i info-radens div.

        var closebuttondiv = document.createElement("DIV");

        closebuttondiv.id = "closebuttondiv";

        var closebutton = document.createElement("input");
        
        closebutton.setAttribute("type", "button");

        closebutton.setAttribute("value", "x");

        closebuttondiv.appendChild(closebutton);

        wintop.appendChild(closebuttondiv);

        //lägger in wintop-diven i popupfönstrets div.

        popupdiv.appendChild(wintop);

                
        //lägger in en div för bild-content

        var contentdiv = document.createElement("div");

        contentdiv.id = "contentdiv";

        popupdiv.appendChild(contentdiv);

        //lägger in en div för laddnings-info, "döper" den (ID) till winbottom

        var contentdiv = document.createElement("div");

        contentdiv.id = "winbottom";

        popupdiv.appendChild(contentdiv);



        //lägger in popup-diven i body

        body.appendChild(popupdiv);
        
        //sätter en onclick funktion till stäng-knappen som tar bort diven

        closebutton.onclick = function () {

            document.body.removeChild(popupdiv);

            
        }

            var bottom = document.getElementById("winbottom");

            var loadingpic = document.createElement("img");

            loadingpic.setAttribute("src", "pics/ajax-loader.gif");
            
            loadingpic.id = "loadingpic";

            bottom.appendChild(loadingpic);

            setTimeout(function () {popup.getInfo(); }, 3000);

    },

    getInfo: function () {

        var bottom = document.getElementById("winbottom");
        var loadinpic = document.getElementById("loadingpic");
        bottom.removeChild(loadinpic);
        
        //hämtar ut länken runt bilden på desktopens "toolbar", som innehåller ajax-länken

        var ajax = document.getElementById("ajax");

        var url = ajax.getAttribute("href");

        var xhr = null;
        try {
            xhr = new XMLHttpRequest();
        } catch (error) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error) {
                throw new Error("No XHR object available");
            }
        }

        xhr.open("get", url, false);
        xhr.send(null);

        if (xhr.readyState == 4) {

            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                //console.log(xhr.responseText);

                var parsed = JSON.parse(xhr.responseText);
            }
            else {
                console.log("Läsfel, status:" + xhr.status);
            }

        }

        console.log(parsed);

       
        popup.appendimg(parsed);
        
    },

    appendimg: function (parsed) {

        console.log(parsed[0].URL);

        // //detta är bara ett test tills vidare!!!!

       // var img = document.createElement("IMG");

       // img.setAttribute("src", "pics/Penguins1.jpg");

       // img.id = "img";

       // //hämtar ut conentdiven

       //var content = document.getElementById("contentdiv");
        
       //content.appendChild(img);

       //var tehimage = document.getElementById("img");

       //tehimage.onclick = function () {

       //    var imgsrc = this.getAttribute("src");

       //    var hutemel = document.getElementsByTagName("HTML")[0];

       //    hutemel.style.background = "url('" + imgsrc + "')";

       //    //hutemel.style.backgroundSize = "cover";
       //}

    }


};

window.onload = popup.onclick;
