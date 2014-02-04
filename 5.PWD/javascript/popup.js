"use strict"


var popup = {

    popup: function () {

        //hämtar ut "toolbar"-diven 

        var toolbar = document.getElementById("toolbar");

        //Hämtar ut bilden via img tagen

        var img = toolbar.getElementsByTagName("IMG")[0];


        //Onclick till bilden på desktopens "toolbar" (längst ner). Gör en prevent default, anropar popupwin funktionen.


        img.onclick = function (e) {

            e.preventDefault();

            //sparar undan onclick funktionen i en varibel och skickar med till popupwin.

            var onclick = img.onclick;


                img.onclick = false;

                var imglink = document.getElementById("ajax");
                imglink.onclick = function () {
                    return false;
                }

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

            winptag.id = "popuptextdiv"

            winptag.innerHTML = "Image Viewer";

            wintextdiv.appendChild(winptag);

            wintop.appendChild(wintextdiv);


            //skapar en stäng-knapp och lägger in den i info-radens div.

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

                    //återställer onclickfunktionen på bilden i toolbaren då fönstret stängts.

                    img.onclick = onclick;

                }

            var bottom = document.getElementById("winbottom");

            var loadingpic = document.createElement("img");

            loadingpic.setAttribute("src", "pics/ajax-loader.gif");

            loadingpic.id = "loadingpic";

            bottom.appendChild(loadingpic);




            //hämtar ut länken runt bilden på desktopens "toolbar", som innehåller ajax-länken

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

                //loopar igenom parsed arrayen och lägger till alla bredder och höjder i boxwidth resp. boxheight arrayen.

                    for (var h = 0; h < parsed.length; h += 1) {

                        boxwidth.push(parsed[h].thumbWidth);
                        boxheight.push(parsed[h].thumbHeight);
                    }

                //sorterar dem i storleksordning

                boxwidth.sort();
                boxheight.sort();

                //snor den sista i den sorterade arrayen (den största höjden resp. bredden) och lägger till 20px och sätter det som storlek på samtliga divar runt bilderna.

                imgbox.style.width = boxwidth.pop() + 20 + "px";
                imgbox.style.height = boxheight.pop() + 20 + "px";

                //hämtar ut contentdiven där bilderna ska läggas in.                

                var content = document.getElementById("contentdiv");
                //console.log(contentdiv)

                content.appendChild(imgbox);

                    for (var i = 0; i < parsed.length - 1; i += 1) {

                        //klonar bild-diven (imgbox) och sätter id till i+1 (finns redan en med ID 0, så börjar från 1)

                        //var cloneimgbox = contentdiv.appendChild(imgbox.cloneNode());

                        //cloneimgbox.id = "imgbox" + (i + 1);    

                        var cloneimgbox = imgbox.cloneNode();

                        cloneimgbox.id = i + 1;

                        var images = document.createElement("img");

                        images.setAttribute("src", parsed[i].URL);

                        images.style.height = parsed[i].thumbHeight;

                        images.style.width = parsed[i].thumbWidth;

                        //justerar marginaler efter storlek på bilden, snyggare så =)

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


                    //sätter en onklick på bilderna, vid klick sätts bakgrunden till den klickade bildens (this) src. 

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
