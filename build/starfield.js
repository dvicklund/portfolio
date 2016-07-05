var starColors = ['#FF2000', '#FFD700', '#800000', '#00FFFF', '#FFFFE0', '#FF8C00'];
var colorCount = starColors.length;

function Star(x, y, size, velocity, color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.velocity = velocity;
  this.color = color;
}

function Starfield() {
  this.fps = 30;
  this.canvas = null;
  this.width = 0;
  this.height = 0;
  this.minVelocity = 20;
  this.maxVelocity = 70;
  this.starCount = 1000;
  this.stars = [];
  this.intervalId = 0;
  this.starMaxSize = 4;
}

Starfield.prototype.init = function(div) {
  var self = this;

  this.containerDiv = div;
  self.width = window.innerWidth;
  self.height = window.innerHeight;

  window.addEventListener('resize', function resize(event) {
    self.width = window.innerWidth;
    self.height = window.innerHeight;
    self.canvas.width = self.width;
    self.canvas.height = self.height;
    self.draw();
  })

  var canvas = document.createElement('canvas');
  div.appendChild(canvas);
  this.canvas = canvas
  this.canvas.width = this.width
  this.canvas.height = this.height
}

Starfield.prototype.start = function() {
  var stars = [];

  for(var star = 0; star < this.starCount; star++) {
    stars[star] = new Star(Math.random() * this.width,
                           Math.random() * this.height,
                           Math.random() * this.starMaxSize + 1 + 8 * Math.floor(Math.random() * 1.01),
                           (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity,
                           starColors[Math.floor(Math.random() * colorCount)])
  }

  this.stars = stars;

  var self = this;
  this.intervalId = setInterval(function() {
    self.update()
    self.draw()
  }, 1000 / this.fps)
}

Starfield.prototype.update = function() {
  var dt = 1/this.fps;
  for(var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i]
    star.y += dt * star.velocity
    if(star.y > this.height) {
      this.stars[i] = new Star(Math.random() * this.width,
                               0,
                               Math.random() * this.starMaxSize + 1 + 8 * Math.floor(Math.random() * 1.01),
                               (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity,
                               starColors[Math.floor(Math.random() * colorCount)])
    }
  }
}

Starfield.prototype.draw = function() {
  var ctx = this.canvas.getContext('2d')

  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, this.width, this.height)

  for(var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i]
    ctx.fillStyle = star.color
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI)
    ctx.fill()
  }
}