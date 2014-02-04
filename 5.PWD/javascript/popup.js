"use strict"


var popup = {

    popup: function () {

        //h�mtar ut "toolbar"-diven 

        var toolbar = document.getElementById("toolbar");

        //H�mtar ut bilden via img tagen

        var img = toolbar.getElementsByTagName("IMG")[0];


        //Onclick till bilden p� desktopens "toolbar" (l�ngst ner). G�r en prevent default, anropar popupwin funktionen.


        img.onclick = function (e) {

            e.preventDefault();

            //sparar undan onclick funktionen i en varibel och skickar med till popupwin.

            var onclick = img.onclick;


                img.onclick = false;

                var imglink = document.getElementById("ajax");
                imglink.onclick = function () {
                    return false;
                }

            //h�mtar ut body-tagen
            var body = document.getElementsByTagName("body")[0];

            //skapar popupf�nstret
            var popupdiv = document.createElement("DIV");

            popupdiv.id = "popupdiv";

            //skapar f�nstrets info-rad, d�r en bild, titeln p� f�nstret och en st�ngknapp ska ligga.

            var wintop = document.createElement("DIV");
            wintop.id = "popuptop";


            //skapar en div d�r en bild ska till popupf�nstrets inforad (l�ngst upp). L�gger in den i infobarens div-tag.

            var winpicdiv = document.createElement("DIV");
            winpicdiv.id = "popuppicdiv";

            var winpic = document.createElement("IMG");

            winpic.setAttribute("src", "pics/PenguinsSmall.jpg");

            winpic.id = "popuppic";

            winpicdiv.appendChild(winpic);

            wintop.appendChild(winpicdiv);


            //skapar en div d�r en titeln ska l�ggas in.

            var wintextdiv = document.createElement("DIV");


            //skapar en p-tag med texten "ImageViewer" och l�gger in den info-radens div.

            var winptag = document.createElement("P");

            winptag.id = "popuptextdiv"

            winptag.innerHTML = "Image Viewer";

            wintextdiv.appendChild(winptag);

            wintop.appendChild(wintextdiv);


            //skapar en st�ng-knapp och l�gger in den i info-radens div.

            var closebuttondiv = document.createElement("DIV");

            closebuttondiv.id = "closebuttondiv";

            var closebuttonA = document.createElement("a");

            closebuttonA.setAttribute("href", "#");

            var closebutton = document.createElement("input");

            closebutton.setAttribute("type", "button");

            closebutton.setAttribute("value", "x");

            closebuttonA.appendChild(closebutton);

            closebuttondiv.appendChild(closebuttonA);

            wintop.appendChild(closebuttondiv);


            //l�gger in wintop-diven i popupf�nstrets div.

            popupdiv.appendChild(wintop);


            //l�gger in en div f�r bild-content

            var contentdiv = document.createElement("div");

            contentdiv.id = "contentdiv";

            popupdiv.appendChild(contentdiv);

            //l�gger in en div f�r laddnings-info, "d�per" den (ID) till winbottom

            var contentdiv = document.createElement("div");

            contentdiv.id = "winbottom";

            popupdiv.appendChild(contentdiv);



            //l�gger in popup-diven i body

            body.appendChild(popupdiv);

            //s�tter en onclick funktion till st�ng-knappen som tar bort diven

                closebutton.onclick = function () {

                    document.body.removeChild(popupdiv);

                    //�terst�ller onclickfunktionen p� bilden i toolbaren d� f�nstret st�ngts.

                    img.onclick = onclick;

                }

            var bottom = document.getElementById("winbottom");

            var loadingpic = document.createElement("img");

            loadingpic.setAttribute("src", "pics/ajax-loader.gif");

            loadingpic.id = "loadingpic";

            bottom.appendChild(loadingpic);




            //h�mtar ut l�nken runt bilden p� desktopens "toolbar", som inneh�ller ajax-l�nken

            var ajax = document.getElementById("ajax");

            var url = ajax.getAttribute("href");

            new Ajax(url, function callback(data) {

                var recived = data;

                var parsed = JSON.parse(recived);


                //    Skapar en div till bilderna, med ID 0 (nollbaserat)

                var imgbox = document.createElement("div");

                imgbox.className = "imgbox";

                imgbox.id = "imgbox0";

                var boxwidth = [];
                var boxheight = [];

                //loopar igenom parsed arrayen och l�gger till alla bredder och h�jder i boxwidth resp. boxheight arrayen.

                    for (var h = 0; h < parsed.length; h += 1) {

                        boxwidth.push(parsed[h].thumbWidth);
                        boxheight.push(parsed[h].thumbHeight);
                    }

                //sorterar dem i storleksordning

                boxwidth.sort();
                boxheight.sort();

                //snor den sista i den sorterade arrayen (den st�rsta h�jden resp. bredden) och l�gger till 20px och s�tter det som storlek p� samtliga divar runt bilderna.

                imgbox.style.width = boxwidth.pop() + 20 + "px";
                imgbox.style.height = boxheight.pop() + 20 + "px";

                //h�mtar ut contentdiven d�r bilderna ska l�ggas in.                

                var content = document.getElementById("contentdiv");
                //console.log(contentdiv)

                content.appendChild(imgbox);

                    for (var i = 0; i < parsed.length - 1; i += 1) {

                        //klonar bild-diven (imgbox) och s�tter id till i+1 (finns redan en med ID 0, s� b�rjar fr�n 1)

                        //var cloneimgbox = contentdiv.appendChild(imgbox.cloneNode());

                        //cloneimgbox.id = "imgbox" + (i + 1);    

                        var cloneimgbox = imgbox.cloneNode();

                        cloneimgbox.id = i + 1;

                        var images = document.createElement("img");

                        images.setAttribute("src", parsed[i].URL);

                        images.style.height = parsed[i].thumbHeight;

                        images.style.width = parsed[i].thumbWidth;

                        //justerar marginaler efter storlek p� bilden, snyggare s� =)

                            if (parsed[i].thumbWidth === 75) {

                                images.style.marginLeft = "10%";
                                images.style.padding = "0px";
                            }

                            if (parsed[i].thumbWidth === 67 || parsed[i].thumbWidth === 66) {

                                images.style.marginLeft = "15%";
                                images.style.padding = "0px";
                            }

                            if (parsed[i].thumbWidth === 33 || parsed[i].thumbWidth === 35) {

                                images.style.marginLeft = "35%";
                                images.style.padding = "0px";
                            }


                    //s�tter en onklick p� bilderna, vid klick s�tts bakgrunden till den klickade bildens (this) src. 

                    images.onclick = function () {

                        var hutml = document.getElementsByTagName("html")[0];

                        console.log(hutml);

                        hutml.style.background = "url(" + this.getAttribute("src") + ")";

                    }

                    cloneimgbox.appendChild(images);

                    content.appendChild(cloneimgbox);
                    


                }

                var originalbox = document.getElementById("imgbox0");

                content.removeChild(originalbox);

                var bottom = document.getElementById("winbottom");
                var loadinpic = document.getElementById("loadingpic");
                bottom.removeChild(loadinpic);


            });


        }
        
    },

    

};

window.onload = popup.popup;
