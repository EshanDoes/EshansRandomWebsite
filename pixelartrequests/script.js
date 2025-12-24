var xhrGet = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
xhrGet.open( 'GET', '/pixelartrequests/requests.php', true );

// Source - https://stackoverflow.com/a
// Posted by razz, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-18, License - CC BY-SA 3.0
function ajaxcall(){
    var data = new FormData();
    var text = document.getElementById("text").value;
    data.append("text" , text);
    var xhrPut = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    xhrPut.open( 'PUT', '/pixelartrequests/requests.php', true );
    xhrPut.send(data);
}