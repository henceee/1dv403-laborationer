function AjaxCon(url, callback) {

        var READY_STATE_UNINITIALIZED = 0;
        var READY_STATE_OPENED = 1;
        var READY_STATE_SENT = 2;
        var READY_STATE_LOADING = 3;
        var READY_STATE_COMPLETE = 4;

        var xhr = this.getXHR();

        xhr.onreadystatechange = function () {

            if (xhr.readyState === READY_STATE_COMPLETE) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    callback(xhr.responseText);
                }
                else {
                    console.log("Läsfel, status:" + xhr.status);
                }
            }
        };

        xhr.open("get", url, true);

        xhr.setRequestHeader('If-Modified-Since', 'Mon, 01 Sep 2007 00:00:00 GMT');

        xhr.send(null);
    }

    AjaxCon.prototype.getXHR = function () {
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
        return xhr;

    //// Create the XHR object.

    //function createCORSRequest(method, url) {
    //    var xhr = new XMLHttpRequest();
    //    if ("withCredentials" in xhr) {
    //        // XHR for Chrome/Firefox/Opera/Safari.
    //        xhr.open(method, url, true);
    //    } else if (typeof XDomainRequest != "undefined") {
    //        // XDomainRequest for IE.
    //        xhr = new XDomainRequest();
    //        xhr.open(method, url);
    //    } else {
    //        // CORS not supported.
    //        xhr = null;
    //    }
    //    return xhr;
    //}

    //// Helper method to parse the title tag from the response.
    //function getTitle(text) {
    //    return text.match('<title>(.*)?</title>')[1];
    //}

    //// Make the actual CORS request.
    //function makeCorsRequest() {
    //    // All HTML5 Rocks properties support CORS.
    //    var url = 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/';

    //    var xhr = createCORSRequest('GET', url);
    //    if (!xhr) {
    //        alert('CORS not supported');
    //        return;
    //    }

    //    // Response handlers.
    //    xhr.onload = function () {
    //        var text = xhr.responseText;
    //        //var title = getTitle(text);
    //        //alert('Response from CORS request to ' + url + ': ' + title);
    //    };

    //    xhr.onerror = function () {
    //        alert('Woops, there was an error making the request.');
    //    };

    //    xhr.send(null);
    //}

3}

