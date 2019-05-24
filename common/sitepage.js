var mainNavigation = "sitepage.js"

var mainNavigation = '<div  style="float:left;"><a href="http://www.w3.org/"><img src="http://www.w3.org/Icons/w3c_home" alt="W3C" height="48" width="72" /></a></div>'+
'<div id="banner" style="float:left; margin-left:10px;"><a href="'+ActivityURI+'"><p id="sitename" style="font-family: Arial, Helvetica, sans-serif; font-size: 22px; border-bottom: 2px solid brown; color: #4c5c9c; margin:0;">'+ActivityTitle+'</p></a></div>'+
'   <br style="clear:both;" />'+
'	<nav id="boilerplate">'+
'	<div id="sitelinks" class="noprint">'+
'	</nav>'
if (f.toc && f.toc === 'no') { } //do nothing
else mainNavigation += '<nav class="noprint" id="level2toc">'+
'            <h2 id="internal-links" class="notoc">'+s.onThisPage+'</h2>'+
'            <div id="toclocation"> </div>'+
'            </nav>'+
'        <nav id="relatedlinks"></nav>'+
'        </div>'

