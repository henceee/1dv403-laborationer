function Message(message, date) {

    this.getText = function () {

        return message;

        //var that = this; // <= kanske kommer att beh�vas h�r sen.
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


    }
}