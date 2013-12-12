"use strict";

function Message(message, date) {

    this.getText = function () {

        return message;

        
    }

    this.setText = function (_text) {

        message = _text;
    }

    this.getDate = function () {

        return date;
    }

    this.setDate = function (_date) {
        
        _date = date;

    }

    Message.prototype.toString = function () {

        return this.getText() + " (" + this.getDate() + ")"
    }


    Message.prototype.getHTMLText = function () {

        var message = this.getText();

        return message.replace(/[\n\r]/g, "<br />");
    }

    Message.prototype.getDateText = function () {

        var date = this.getDate();

        var day = [];
        day[0] = "måndagen";
        day[1] = "tisdagen";
        day[2] = "onsdagen";
        day[3] = "torsdagen";
        day[4] = "fredagen";
        day[5] = "lördagen";
        day[6] = "söndagen";

        var d = day[date.getDay()];

        var month = [];

        month[0] = "januari";
        month[1] = "februari";
        month[2] = "mars";
        month[3] = "april";
        month[4] = "maj";
        month[5] = "juni";
        month[6] = "juli";
        month[7] = "augusti";
        month[8] = "september";
        month[9] = "oktober";
        month[10] = "november";
        month[11] = "december";

        var m = month[date.getMonth()];

        var thedate = "Inlägget skapades den " +d+" " + date.getUTCDate() + " " +m + " " +date.getUTCFullYear();

        return thedate;
    }
}