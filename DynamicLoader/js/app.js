var k = 1;
var htmlString = "";
var counter = 1;
function checker(){
    var ourRequest = new XMLHttpRequest();
    var animalContainer = document.getElementById("animal-info");
    var btn = document.getElementById("btns");
        ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + k + '.json');
        ourRequest.onload = function() {
            var jsonString = JSON.parse(ourRequest.responseText);
            htmldisplayer(jsonString);
        };
        ourRequest.send();
        k++;
        if(k > 3){
            btn.classList.add("hide-me");
        }
}

function htmldisplayer(data){
    var ourData = data;
    for(var i = 0; i < ourData.length; i++){
        htmlString += "<p>"+counter +". "+ourData[i].name+" is a "+ourData[i].species+" and likes ";
        for(var j = 0; j < ourData[i].foods.likes.length; j++){
            if(j == 0){
                htmlString += ourData[i].foods.likes[j];
            } else{
                htmlString += " and "+ourData[i].foods.likes[j];
            }
        }
        htmlString += " and dislikes ";
        for(var j = 0; j < ourData[i].foods.dislikes.length; j++){
            if(j == 0){
                htmlString += ourData[i].foods.dislikes[j];
            } else{
                htmlString += " and "+ourData[i].foods.dislikes[j];
            }
        }
        htmlString += ".</p>";
        counter++;
    }
    document.getElementById("animal-info").innerHTML = htmlString;
}
