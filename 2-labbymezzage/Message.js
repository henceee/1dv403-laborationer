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

        //...
    }

    Message.prototype.getDateText = function () {


    }
}