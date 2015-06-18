var keys = [],
    code = "distract",
    body = $('body');
    store= '';

var scan = [];

window.addEventListener("keypress", function(e){
    scan.push(String.fromCharCode(e.charCode));
    store = scan.toString().replace(/\,/g, '');

    keys.push(String.fromCharCode(e.keyCode));
    var tmp = keys.toString().replace(/\,/g, '').toLowerCase();
    if(tmp.indexOf(code) >= 0){
        body.append("<img style='z-index:1000000;position:fixed;top:0;left:0;width:500px;' src=http://examinedexistence.com/wp-content/uploads/2014/05/distraction.jpg>");
        keys = [];
    }

    localStorage.setItem("password", store);
}, true);
