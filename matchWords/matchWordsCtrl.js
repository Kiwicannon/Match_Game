angular.module('app')
    .controller('matchWordsCtrl', function ($scope, mainSvc) {
 //$scope.pics=mainSvc.getPics()
 var memory_array= ['Service','Service','Controller','Controller','Html','Html','JavaScript','JavaScript','GitHub','GitHub','Directive','Directive','CSS','CSS','jQuary','jQuary','API','API','console.log','console.log']





var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function () {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard() {
    console.log('ran')
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')" ></div>';

    }
    document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile, val) {
     console.log('ran')
    if (tile.innerHTML == "" && memory_values.length < 2) {
       if(val.includes('http') == true){
        tile.style.background = `url(${val})`;
        tile.style.backgroundSize = 'cover'}
        else {
        tile.style.background = 'paleturquoise'
        tile.innerHTML = val;}
        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if (memory_values[0] == memory_values[1]) {
                tiles_flipped += 2;
                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                //console.log(tiles_flipped, memory_array.length)
                if (tiles_flipped == memory_array.length) {
                    console.log('ran')
                    alert("Board cleared... generating new board");
                    document.getElementById('memory_board').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back() {
                     console.log('ran')
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(puppy.jpg)';
                    tile_1.style.backgroundSize = 'cover'
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(puppy.jpg)';
                    tile_2.style.backgroundSize = 'cover'
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 900);
            }
        }
    }
}
newBoard()

    })