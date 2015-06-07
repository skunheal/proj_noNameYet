var tileheight = 94;
var tilewidth = 80;

function createMap(bounds) {
  var table = [];
  for (var c = 0; c < bounds*3; c++) {
    var row = [];
    for (var r = 0; r < bounds; r++) {
      row.push(generateTile());
    }
    table.push(row);
  }
  return table;
}
    
function generateTile() {
  if (Math.floor(Math.random() * 3) == 0) {
    return {"color": "light", "oil": Math.floor(Math.random()*10)+1};
  }
  return {"color": "dark", "oil": Math.floor(Math.random()*10)+1};
}

function drawMap(map) {
	for (var i=0; i<map.length; i++){
		for (var j=0; j<map[i].length; j++){
			tileinfo = map[i][j];
			var tile = document.createElement('a');
			tile.setAttribute('class', 'tile');
			tile.style.left = String(i%2*60+j*tilewidth*3/2) + "px";
			tile.style.top = String(i*tileheight/3) + "px";
			tile.innerHTML = "<img src='images/tile"+tileinfo.color+".png'/>";
			$('#hexmap').append(tile);
		}
	}
}

var map = createMap(6);
drawMap(map);

$( "#login" ).click(function() {
  var naam = document.getElementById('naam').value;
  alert( naam );
  writeHighscore(naam);
});

function writeHighscore(naam){
	if (naam) {
		var xmlhttp;
		if (!isallowed(naam)) {
			writeHighscore();
		} else { 
			if (window.XMLHttpRequest) { //IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else { //IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("GET","ins.php?naam="+naam,false);
			xmlhttp.send(null);
		}
	}
};