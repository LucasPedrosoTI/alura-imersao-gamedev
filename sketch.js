let bkg, hipstaImg, scenary, gameMusic, char;

function preload() {
  bkg = loadImage("./imagens/cenario/floresta.png");
  hipstaImg = loadImage("./imagens/personagem/correndo.png");
  gameMusic = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenary = new Scenary(bkg, 3);
  char = new Char(hipstaImg, 660, 840, 4, 4, 110, 135, 220, 270);
  frameRate(30);
  gameMusic.loop();
}

function draw() {
  scenary.show();
  scenary.move();
  char.show();
}
