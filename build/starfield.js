var starColors = ['rgba(255, 32, 0, 1.0)', 'rgba(255, 215, 0, 1.0)', 'rgba(128, 0, 0, 1.0)', 'rgba(0, 255, 255, 1.0)', 'rgba(255, 255, 224, 1.0)', 'rgba(255, 140, 0, 1.0)'];
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
  var stars = []

  for(var star = 0; star < this.starCount; star++) {
    stars[star] = new Star(Math.random() * this.width,
                           Math.random() * this.height,
                           Math.random() * this.starMaxSize + 1 + 8 * Math.floor(Math.random() * 1.01),
                           (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity,
                           starColors[Math.floor(Math.random() * colorCount)])
  }

  this.stars = stars

  var self = this
  this.intervalId = setInterval(function() {
    self.updateHorizontal()
    self.draw()
  }, 1000 / this.fps)
}

Starfield.prototype.update = function() {
  var dt = 1/this.fps
  this.sortStarsByVelocity()
  for(var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i]
    star.y += dt * star.velocity
    if(star.y > this.height + star.size) {
      this.stars[i] = new Star(Math.random() * this.width,
                               -star.size,
                               Math.random() * this.starMaxSize + 1 + 8 * Math.floor(Math.random() * 1.01),
                               (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity,
                               starColors[Math.floor(Math.random() * colorCount)])
    }
  }
}

Starfield.prototype.updateHorizontal = function() {
  var dt = 1/this.fps
  this.sortStarsByVelocity()
  for(var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i]
    star.x -= dt * star.velocity
    if(star.x < -star.size) {
      this.stars[i] = new Star(star.size + this.width,
                              Math.random() * this.height,
                              Math.random() * this.starMaxSize + 1 + 8 * Math.floor(Math.random() * 1.01),
                              (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity,
                              starColors[Math.floor(Math.random() * colorCount)])
    }
  }
}

Starfield.prototype.sortStarsByVelocity = function() {
  this.stars.sort(function(a, b) {
    if(a.velocity > b.velocity) return 1
    if(a.velocity < b.velocity) return -1
    else return 0
  })
}

Starfield.prototype.draw = function() {
  var ctx = this.canvas.getContext('2d')

  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, this.width, this.height)

  for(var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i]
    var gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size)
    gradient.addColorStop(0, star.color)
    gradient.addColorStop(0.2, star.color)
    var transColor1 = star.color.substring(0, star.color.length - 4) + '0.2)'
    var transColor2 = star.color.substring(0, star.color.length - 4) + '0)'
    gradient.addColorStop(0.3, transColor1)
    gradient.addColorStop(1, transColor2)
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.size*2, 0, 2 * Math.PI)
    ctx.fill()
  }
}
