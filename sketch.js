let p1, p2, bola
let pontosVitoria = 10
let velJogador = 5
let velBola = 4
let acabou = true

function setup() {
  createCanvas(800, 500);
  jogador1 = new Jogador(40, height / 2 - 35, velJogador, "W".charCodeAt(0), "S".charCodeAt(0))
  jogador2 = new Jogador(width - 60, height / 2 - 35, velJogador, UP_ARROW, DOWN_ARROW)

  bola = new Bola(width / 2, height / 2, 40, velBola)
}

function draw() {
    let c = color(
        40, 189, 84
        );
    background(c);

    stroke(245)
    strokeWeight(4)
    

   
    fill(c);
    circle(width/2 - 75, height/2 - 75, 150)

    line(width / 2 - 2, 2, width / 2 - 1, height)

    rect(-10, height/2 - 90, 90, 180);

    rect(width -80, height/2 - 90, 90, 180);

    noStroke()
    jogador1.draw(1)
    jogador2.draw(2)
    

    fill(201, 201, 201)
    bola.draw()


    
    jogador1.movimentar()
    jogador2.movimentar()
    bola.movimentar(jogador1, jogador2)

    //bola.checarColisao(jogador1, jogador2)
    resetarAposPontuar()
}

function resetarAposPontuar() {
    if ((bola.x - bola.diametro / 2 <= -bola.diametro)
     || (bola.x + bola.diametro / 2 >= width + bola.diametro)) {
        bola.x = width / 2
        bola.y = height / 2
        bola.dirX *= -1
      let direction = random(2)
      bola.dirY *= direction == 0 ? -1 : 1
      bola.vel = velBola
    }

    if (bola.x + bola.diametro / 2 >= width + bola.diametro) {
        bola.x = width / 2
        bola.y = height / 2
        bola.dirX *= -1
        let direction = random(2)
        bola.dirY *= direction == 0 ? -1 : 1
        bola.vel = velBola
      }
  }