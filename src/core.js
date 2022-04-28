function haxtoolcreate() {
  let win = window.open('',"Ratting","width=550px,height=350px,left=150,top=200,toolbar=0,status=0,"); req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/Tylo-6/HTool/main/src/window.html'); req.onload = function() { win.document.write(this.responseText); }; req.send();
}

console.stdlog = console.log.bind(console);
console.logs = [];
var outtext = opener.getElementById('outtext');
function refresh() {
    var text = ""
    for (let i = 0; i < console.logs.length; i++) {
        text += console.logs[i] + "<br>";
    }
    outtext.innerHTML = text;
}
console.log = function(){
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
    refresh();
}
console.clear = function(){
    console.logs.length = 0;
    refresh();
}
console.log("e");

haxtoolcreate();
