var ourRequest = new XMLHttpRequest();
var placer = document.getElementById("placeValue");
var ourdata;
ourRequest.open('GET','/JSON-AJAX/JSON-AJAX/ArtistCatalog/json/catalog.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    ourdata = ourData;
    htmldisplayer(ourData);
};
ourRequest.send();

function htmldisplayer(data){
    var myData = data;
    var htmlString = "<table class='table table-bordered table-condensed table-responsive table-hover fonter'><thead><tr class='bg-danger'><th>Artist</th><th>Title</th></tr></thead><tbody>"
    for(var i = 0; i < myData.length; i++){
        htmlString += "<tr onclick='showData("+ i +")' class='bg-info' style='cursor:pointer'><td>"+myData[i].ARTIST+"</td><td>"+myData[i].TITLE+"</td></tr>"
    }
    htmlString += "</tbody></table>"
    document.getElementById("placeValue").innerHTML = htmlString;
}

function showData(index){
    var htmlResult;
    htmlResult = "<p class='bg-success fonter'>Artist: "+ourdata[index].ARTIST+"<br>Title: "+ourdata[index].TITLE+"<br>Year: "+ourdata[index].YEAR+"<br>Company: "+ourdata[index].COMPANY+"<br>Country: "+ourdata[index].COUNTRY+"<br>Price: "+ourdata[index].PRICE+"</p>";
    document.getElementById("description").innerHTML = htmlResult;
}
