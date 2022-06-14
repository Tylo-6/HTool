function haxtoolcreate() {
  let win = window.open('',"_blank"); req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/Tylo-6/HTool/main/src/window.html'); req.onload = function() { win.document.write(this.responseText); }; req.send();
}

haxtoolcreate();
