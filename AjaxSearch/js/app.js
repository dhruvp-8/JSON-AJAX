function findmatch(){
    if(window.XMLHttpRequest)
		{
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById('results').innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open('GET','/JSON-AJAX/JSON-AJAX/AjaxSearch/search.inc.php?search_text='+document.search.search_text.value,'true');
		xmlhttp.send();
}
