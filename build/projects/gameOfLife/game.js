var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pixelsPerBlock = 5;
var W = canvas.width = window.innerWidth;
var H = canvas.height = window.innerHeight;
var defaultMapCellsX = W / pixelsPerBlock;
var defaultMapCellsY = H / pixelsPerBlock;
var blockW = W / defaultMapCellsX;
var blockH = H / defaultMapCellsY;

var mapArr = [];
var start = null;

function nextGen(cells){
  // Uncomment next row to have an example

  var nextGenArr = [];

  cells.forEach(function(row, y, outerArr) {
    nextGenArr.push([]);
    row.forEach(function(cell, x, innerArr) {
      var neighbors = (innerArr[x+1] ? 1 : 0)                        // right
                    + (innerArr[x-1] ? 1 : 0)                        // left
                    + (outerArr[y-1] ? outerArr[y-1][x] ? 1 : 0 : 0) // top
                    + (outerArr[y+1] ? outerArr[y+1][x] ? 1 : 0 : 0) // bottom
                    + (outerArr[y-1] ? outerArr[y-1][x+1] ? 1 : 0 : 0) // top-right
                    + (outerArr[y-1] ? outerArr[y-1][x-1] ? 1 : 0 : 0) // top-left
                    + (outerArr[y+1] ? outerArr[y+1][x+1] ? 1 : 0 : 0) // bottom-right
                    + (outerArr[y+1] ? outerArr[y+1][x-1] ? 1 : 0 : 0) // bottom-left

      var result = neighbors < 2 ?                    0 :
                   neighbors == 2 && cell == 1 ?      1 :
                   neighbors == 3 && !cell ?          1 :
                   neighbors < 4 && neighbors !== 2 ? 1 :
                                                      0;
      nextGenArr[y].push(result);
    })
  })

  return nextGenArr;
}

function randomizeMap() {
  var map = [];
  for(var y = 0; y < defaultMapCellsY; y++) {
    map.push([]);
    for(var x = 0; x < defaultMapCellsX; x++) {
      map[y].push(Math.round(Math.random()));
    }
  }
  return map;
}

function draw(timestamp) {
  requestAnimationFrame(draw);
  mapArr = nextGen(mapArr);
  mapArr.forEach(function(row, y) {
    row.forEach(function(block, x) {
      if(block === 1) drawBlock('black', x, y);
      else if(block === 0) drawBlock('white', x, y);
    })
  })
}

function drawBlock(color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x * blockW, y * blockH, blockW, blockH);
}

function init() {
  mapArr = randomizeMap();
  draw();
}

init();
