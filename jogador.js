class Jogador {
    constructor(x, y, vel, keyUp, keyDown) {
      this.x = x;
      this.y = y;
      this.vel = vel;
      this.keyUp = keyUp;
      this.keyDown = keyDown;
      this.largura = 30
      this.altura = 100;
      this.sentido = 0;
    }
  
    draw(player) {
        let c = player == 1 ? color(41, 101, 196) : color(245, 242, 66) // Define color 'c'
        fill(c); // Use color variable 'c' as fill color
        noStroke(); // Don't draw a stroke around shapes
        rect(this.x, this.y, this.largura, this.altura);
    }
  
    handleInput() {
      if (keyIsDown(this.keyUp)) {
        this.sentido = -1
      }
  
      if (keyIsDown(this.keyDown)) {
        this.sentido = 1
      }
    }
  
    checarBordas() {
      if (this.y < 0) {
        this.y = 0
      }
      if (this.y > (height - this.altura)) {
        this.y = height - this.altura
      }
    }
  
    movimentar() {
      this.handleInput()
      this.y += this.vel * this.sentido
      this.checarBordas()
      this.sentido = 0
    }
  
  
  
  }