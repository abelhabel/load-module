
function getScript(fileName) {
  var ajax;
  if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  } else {
    // code for older browsers
    ajax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function(res) {
    if (ajax.readyState == 4 && ajax.status == 200) {
      loadModule(ajax.responseText, fileName);
    }
  };
  ajax.open("GET", "/" + fileName + '.js', true);
  ajax.send();
}

getScript('test');


var modules = {};

function loadModule(script, name){
  var tag = document.createElement('script');
  tag.async = true;
  var head = document.getElementsByTagName('head')[0];
  var module = {};
  module.exports = {};
  tag.src = "data:text/javascript;base64," + btoa(
    "modules['"+ name + "']= (function(name){"+
      "var dep = {};" +
      "this.getDep = function(){" +
        "var keys = {};" +
        "for(var key in dep) {" +
          "keys[key] = modules[key];" +
        "}" +
        "return keys;" +
      "};" +
      "var require=function(str){" +
        "loadXMLDoc(str);" +
        "dep[str] = str;" +
        "return dep[str];" +
      "};" +
      "var module = {};" + 
      script + 
      'module.exports.getDep = getDep;' +
      "return module.exports;"+
    "})(" + "modules['"+ name + "']" + ");");
  head.appendChild(tag);
}











