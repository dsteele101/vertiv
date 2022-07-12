function loadiFrame(url) {
  var x = document.createElement("IFRAME");
  x.setAttribute("src", url);
  x.setAttribute("style", "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:99;");
  document.body.appendChild(x);
}
