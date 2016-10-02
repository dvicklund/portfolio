const starColors = ['rgba(255,32,0,1.0)', 'rgba(255,215,0,1.0)', 'rgba(128,0,0,1.0)', 'rgba(0,255,255,1.0)', 'rgba(255,255,224,1.0)', 'rgba(255,140,0,1.0)'];
const starGrads = [];
const colorCount = starColors.length;

let lastTimestamp = 0;

function Star(x, y, size, velocity, color) {
  this.x = x;
  this.y = y;
  this.lastX = x;
  this.lastY = y;
  this.size = size;
  this.velocity = velocity;
  this.brightness = 1.0;
  this.color = color;
  this.gradient = null;
}

Star.prototype.setBrightness = function() {
  var brightness = this.brightness = this.velocity * 0.1

  var cArrayA = this.color.split(/\(|,|\)/g).filter(function(e) {
    return !Number.isNaN(parseInt(e, 10))
  }).map(function(e, i) {
    if(i != 3) {
      return parseInt(e * brightness, 10)
    }
    else return (parseInt(e, 10) * brightness).toString().substr(0,4)
  })

  this.color = 'rgba(' + cArrayA[0] + ',' + cArrayA[1] + ',' + cArrayA[2] + ',1.0)'
  this.size *= brightness * 0.05
}

function Starfield() {
  this.fps = 60;
  this.canvas = null;
  this.ctx = null;
  this.hidCanvas = null;
  this.hidCtx = null;
  this.width = 0;
  this.height = 0;
  this.minVelocity = 2;
  this.maxVelocity = 100;
  this.starCount = 1000;
  this.stars = [];
  this.intervalId = 0;
  this.starMaxSize = 5;
}

Starfield.prototype.init = function(div) {
  var self = this;

  this.containerDiv = div;
  self.width = window.innerWidth;
  self.height = window.innerHeight;

  var canvas = document.createElement('canvas')
  var hidCanvas = document.createElement('canvas')
  hidCanvas.style.display = 'none'

  div.appendChild(canvas)
  div.appendChild(hidCanvas)

  this.canvas = canvas
  this.ctx = canvas.getContext('2d')
  this.canvas.width = this.width
  this.canvas.height = this.height

  this.hidCanvas = hidCanvas
  this.hidCtx = hidCanvas.getContext('2d')
  this.hidCanvas.width = this.width
  this.hidCanvas.height = this.height
  this.hidCtx.fillStyle = 'black'
  this.hidCtx.fillRect(0, 0, this.width, this.height)

  window.addEventListener('resize', function resize(event) {
    self.width = window.innerWidth;
    self.height = window.innerHeight;
    self.canvas.width = self.width;
    self.canvas.height = self.height;
    self.hidCanvas.width = self.width;
    self.hidCanvas.height = self.height;
    self.draw(self.hidCtx);
    self.render()
  })

  this.start()
}

Starfield.prototype.start = function() {
  var stars = []

  for(var star = 0; star < this.starCount; star++) {
    stars[star] = new Star(Math.random() * this.width,
                           Math.random() * this.height,
                           Math.random() * this.starMaxSize + 1 + 8 * Math.floor(Math.random() * 1.01),
                           (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity,
                           starColors[Math.floor(Math.random() * colorCount)])
    stars[star].setBrightness()
  }

  this.stars = stars

  var self = this
  this.intervalId = setInterval(function() {
    self.draw(self.hidCtx)
  }, 1000 / this.fps)

  function render(timestamp) {
    self.ctx.drawImage(self.hidCanvas, 0, 0)
    requestAnimationFrame(render)
  }
  render()
}

Starfield.prototype.update = function() {
  var dt = 1/this.fps
  // this.sortStarsByVelocity()
  for(var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i]
    star.y += dt * star.velocity
    if(star.y > this.height + star.size) {
      this.stars[i] = new Star(Math.random() * this.width,
                               -star.size,
                               Math.random() * this.starMaxSize + 1 + 8 * Math.floor(Math.random() * 1.01),
                               (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity,
                               starColors[Math.floor(Math.random() * colorCount)])
      this.stars[i].setBrightness()
    }
  }
}

Starfield.prototype.updateHorizontal = function() {
  var dt = 1/this.fps
  this.sortStarsByVelocity()
  for(var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i]
    star.lastX = star.x;
    star.x -= dt * star.velocity
    if(star.x < -star.size) {
      this.stars[i] = new Star(star.size + this.width,
                              Math.random() * this.height,
                              Math.random() * this.starMaxSize + 1 + 8 * Math.floor(Math.random() * 1.01),
                              (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity,
                              starColors[Math.floor(Math.random() * colorCount)])
      this.stars[i].setBrightness()
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

Starfield.prototype.draw = function(context) {
  this.updateHorizontal();
  //
  // context.fillStyle = '#000000'
  // context.fillRect(0, 0, this.width, this.height)
  context.fillStyle = '#000000'
  context.fillRect(0, 0, 5, this.height)

  for(var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i]

    context.fillStyle = '#000000'
    if(star.size < 1.5) {
      context.fillRect(star.lastX - star.size*4, star.y - star.size*4, star.size*8, star.size*8)
    } else {
      context.fillRect(star.lastX - star.size, star.y - star.size, star.size*2, star.size*2)
    }

    var gradient = context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size)
    gradient.addColorStop(0, star.color)
    gradient.addColorStop(0.3, star.color)
    var transColor2 = star.color.substring(0, star.color.length - 4) + '0)'
    gradient.addColorStop(1, transColor2)
    context.fillStyle = gradient
    // context.beginPath()
    // context.arc(star.x, star.y, star.size*2, 0, 2 * Math.PI)
    // context.fill()
    context.fillRect(star.x - star.size, star.y - star.size, star.size*2, star.size*2)
  }
}
