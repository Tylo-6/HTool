javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/Tylo-6/HTool/main/src/core.js'); req.onload = function() { eval(this.responseText); }; req.send();
