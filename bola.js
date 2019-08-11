class Bola {

    constructor(x, y, diametro, vel) {
      this.x = x
      this.y = y
      this.diametro = diametro
      this.vel = vel
      this.dirX = -1
      this.dirY = -0.6
    }
  
    draw() {
      ellipseMode(CORNER)
      circle(this.x, this.y, this.diametro)
    }
  
    movimentar(jogador1, jogador2) {
      var i;
      for(i=0; i<this.vel; i++){
        this.x += 1* this.dirX;
        this.y += 1* this.dirY;
        this.checarBordas();
        this.checarColisao(jogador1, jogador2);
      }
    }
  
    checarBordas(){
      if(this.y <= 0 ||
        this.y + this.diametro >= height) {
        this.dirY = this.dirY*-1  
      }
    }
      
    checarColisao(jogador1, jogador2) {

      if (
        this.x  + this.diametro>= jogador1.x &&
        this.x  <= jogador1.x + jogador1.largura &&
        this.y + this.diametro >= jogador1.y && 
        this.y  <= jogador1.y + jogador1.altura
      ) {
        if(
          this.x < jogador1.x + jogador1.largura //a bola bateu só em cima ou embaixo, sem ser na lateral

        ){
          if(
            (((this.y + this.diametro)-10 <= jogador1.y) && this.dirY > 0 ) || //a bola bateu em cima e ela ta descendo OU
            ((this.y + 10 >= jogador1.y + jogador1.altura) && this.dirY < 0) //a bola bateu em baixo e ta subindo
          ){ 
            this.dirY = this.dirY * -1
          }
        } else{
          this.dirX = this.dirX * -1
        }
        this.vel = this.vel + 1
      } else if (
        this.x  + this.diametro>= jogador2.x &&
        this.x  <= jogador2.x + jogador2.largura &&
        this.y + this.diametro >= jogador2.y && 
        this.y  <= jogador2.y + jogador2.altura
      ) {
        if(
          this.x + this.diametro > jogador2.x //a bola bateu só em cima ou embaixo, sem ser na lateral

        ){
          if(
            (((this.y + this.diametro)-10 <= jogador2.y) && this.dirY > 0 ) || //a bola bateu em cima e ela ta descendo OU
            ((this.y + 10 >= jogador2.y + jogador2.altura) && this.dirY < 0) //a bola bateu em baixo e ta subindo
          ){ 
            this.dirY = this.dirY * -1
          }
        } else{
          this.dirX = this.dirX * -1
        }
        this.vel = this.vel + 1
      }
    }
  
  }