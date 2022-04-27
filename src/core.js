function haxtoolcreate() {
  alert("creating window");
  let win = window.open('',"Ratting","width=550px,height=350px,left=150,top=200,toolbar=0,status=0,"); req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/Tylo-6/HTool/main/src/window.html'); req.onload = function() { win.document.write(this.responseText); }; req.send();
}
haxtoolcreate();
